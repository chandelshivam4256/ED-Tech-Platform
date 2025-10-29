const Razorpay = require('razorpay');
require('dotenv').config();

let instance = null;

if (process.env.RAZORPAY_KEY && process.env.RAZORPAY_SECRET) {
  instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
  });
  console.log("✅ Razorpay instance initialized");
} else {
  console.warn("⚠️ Razorpay keys not found. Skipping Razorpay initialization.");
}

exports.instance = instance;
