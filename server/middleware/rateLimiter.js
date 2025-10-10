// middleware/rateLimiter.js
const resendTracker = new Map();

exports.resendLimiter= (req, res, next) => {
  const email = req.body.email;
  if (!email) return res.status(400).json({ message: "Email required" });

  const now = Date.now();
  const lastSent = resendTracker.get(email);

  // Only allow once every 60 seconds
  if (lastSent && now - lastSent < 60 * 1000) {
    const wait = Math.ceil((60 * 1000 - (now - lastSent)) / 1000);
    return res.status(429).json({ message: `Please wait ${wait}s before resending.` });
  }

  resendTracker.set(email, now);
  next();
};
