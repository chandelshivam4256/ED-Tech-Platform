const axios = require("axios");

const mailSender = async (email, title, body) => {
  try {
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL;
    const SENDER_NAME = process.env.BREVO_SENDER_NAME || "StudyNotion || by Shivam_Chandel";

    // Prepare email data
    const data = {
      sender: { name: SENDER_NAME, email: SENDER_EMAIL },
      to: [{ email }],
      subject: title,
      htmlContent: body,
    };

    // Send via Brevo API
    const response = await axios.post("https://api.brevo.com/v3/smtp/email", data, {
      headers: {
        "accept": "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json",
      },
    });

    console.log("✅ Email sent successfully via Brevo:", response.data.messageId || response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Error while sending mail (mailSender - Brevo):", error.response?.data || error.message);
  }
};

module.exports = mailSender;
