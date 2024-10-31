import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail', // or your preferred email service
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

export const sendTokenEmail = async (email, token) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your Login Token',
        text: `Here is your authentication token: ${token}`,
        html: `<p>Here is your authentication token:</p><p><strong>${token}</strong></p>`
    };

    await transporter.sendMail(mailOptions);
}; 