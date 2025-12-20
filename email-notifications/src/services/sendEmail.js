import nodemailer from "nodemailer";
import {getTemplate} from "../template.js";

export const sendMessage = async (payload) => {
    const {
        email,
        name,
        message,
        subject
    } = payload;

    const  defaultSubject = 'Message from portfolio website';

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: 'ruslan.kolibabchuk@gmail.com',
                pass: 'fedo bayl qdep laab',
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