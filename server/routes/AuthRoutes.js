const express = require("express");
const { registerUser, loginUser, verifyEmail, resendVerificationEmail } = require("../controllers/authController");
const passport = require("passport");
const { googleAuthSuccess, googleAuthFailure } = require("../controllers/authController");

const { resendLimiter } = require("../middleware/rateLimiter");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/verify/:token", verifyEmail);
router.post("/resend-verification", resendLimiter, resendVerificationEmail);
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.CLIENT_URL}/signin?error=google_auth_failed`,
    session: false,
  }),
  googleAuthSuccess
);
router.get("/google/failure", googleAuthFailure);
module.exports = router;
