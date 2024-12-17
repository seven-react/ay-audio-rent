const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, dateNeeded, address, equipment, message } = req.body;

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,  // Your Gmail address
        pass: process.env.EMAIL_PASS,  // Your Gmail App Password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,  // Your Gmail address
      to: process.env.RECEIVER_EMAIL,  // Replace with the recipient's email
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        You have a new message from your contact form:
        
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Date Needed: ${dateNeeded || "N/A"}
        Delivery Address: ${address || "N/A"}
        Equipment: ${equipment || "N/A"}
        Message: ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: "Your message has been sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Error sending email, please try again." });
    }
  } else {
    // Method Not Allowed
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
