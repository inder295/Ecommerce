import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const sendMail = async (to, subject, html) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });


        await transporter.sendMail({
            from: `<noreply@myecom.com>`,
            to,
            subject,
            html
        });

        
    } catch (error) {
        return res.status(500).json({
            message: "Error in sending email",
            error: error.message
        })
    }
};

export default sendMail;
