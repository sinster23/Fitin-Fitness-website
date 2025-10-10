const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { sendVerificationEmail } = require("../utils/sendEmail");
const passport = require("passport");
const crypto = require("crypto");
const cookieParser = require("cookie-parser");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// ✅ Register
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const user = await User.create({
      name,
      email,
      password,
      verified: false,
    });
    const token = generateToken(user._id);

    await sendVerificationEmail(email, token);

    res.status(201).json({ message: "Verification email sent. Please check your inbox." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Login
// ✅ Fixed Login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    
    if (user.verified === false) {
      return res.status(401).json({ message: "Email address not verified" });
    }
    
    if (await user.matchPassword(password)) {
      const token = generateToken(user._id);
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token,
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Verify Email
exports.verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    await User.findByIdAndUpdate(decoded.id, { verified: true });
    res.json({ message: "Email verified successfully" });
  } catch (err) {
    res.status(400).json({ message: "Invalid or expired token" });
  }
};

// ✅ Resend Verification Email
exports.resendVerificationEmail = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.verified) {
      return res.status(400).json({ message: "User already verified" });
    }

    // generate a new token for verification
    const token = generateToken(user._id);

    // send the verification email again
    await sendVerificationEmail(email, token);

    res.json({ message: "Verification email resent successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.googleAuthSuccess = async (req, res) => {
  try {
    if (req.user) {
      const token = generateToken(req.user._id);
      
      // Encode user data to handle special characters in names
      const userData = {
        userId: req.user._id,
        name: encodeURIComponent(req.user.name),
        email: encodeURIComponent(req.user.email),
        token: token
      };
      
      // Build query string
      const queryString = `token=${userData.token}&userId=${userData.userId}&name=${userData.name}&email=${userData.email}`;
      
      // Redirect to frontend with token and user data
      const frontendURL = process.env.CLIENT_URL || 'http://localhost:3000';
      res.redirect(`${frontendURL}/auth/success?${queryString}`);
    } else {
      const frontendURL = process.env.CLIENT_URL || 'http://localhost:3000';
      res.redirect(`${frontendURL}/signin?error=auth_failed`);
    }
  } catch (error) {
    console.error('Google auth error:', error);
    const frontendURL = process.env.CLIENT_URL || 'http://localhost:3000';
    res.redirect(`${frontendURL}/signin?error=server_error`);
  }
};

// ✅ Google OAuth Failure Handler
exports.googleAuthFailure = (req, res) => {
  const frontendURL = process.env.CLIENT_URL || 'http://localhost:3000';
  res.redirect(`${frontendURL}/signin?error=google_auth_failed`);
};

