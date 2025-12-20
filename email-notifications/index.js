import express from "express";
import cors from "cors";
import {validate} from "./src/validate.js";
import {emailQueue} from "./src/emailQueue.js";

const server = express();

server.use(cors());
server.use(express.json());


server.get('/', async (req, res) => {
    res.send('Hello World!');
});

server.post('/send-email', async (req, res) => {
    try {
        const { email, name, message, subject } = req.body;

        const payload = {
            email,
            name,
            message,
            subject,
        };

        const validation = validate(payload);
        if (validation.isValid) {

            await emailQueue.add('sendEmail', payload);

            res.send({success: true, message: 'Email sent successfully'});
            return;
        }
        res.status(400).send({success: false, message: validation.errors});
    } catch (error) {
        res.status(400).send({success: false, message: 'Error sending email'});
    }
})


server.listen(4000, () => {
    console.log('Server is running on port 4000');
})