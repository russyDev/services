import nodemailer from "nodemailer";
import {getTemplate} from "../template.js";
import dotenv from "dotenv";
dotenv.config();

export const sendMessage = async (payload) => {
    const {
        email,
        name,
        message,
        subject
    } = payload;

    console.log( process.env.EMAIL_USER);
    const  defaultSubject = 'Message from portfolio website';

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        transporter.verify().then(console.log).catch(console.error);

        await transporter.sendMail({
            from: `${name} <${email}>`,
            to: "ruslan.kolibabchuk@gmail.com",
            subject: subject ?? defaultSubject,
            text: message,
            html: getTemplate({
                email,
                name,
                message,
            }),
        })

        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }

}