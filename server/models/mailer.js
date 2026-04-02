import nodemailer from "nodemailer";

export const sendEmail = async (req, res) => {
    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
        const { name, email, message } = req.body || {};

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: "🎊 New Contact Message 🎊",
            html: `
                <h2>New Message</h2>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Message:</b> ${message}</p>
            `,
        };

        const info = await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: "Email sent successfully",
            messageId: info.messageId
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Email Failed"
        });
    }
};