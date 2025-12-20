import { Worker } from 'bullmq';
import {sendMessage} from "../services/sendEmail.js";
import {redis} from "../redis.js";

const worker = new Worker('emailQueue', async job => {
    await sendMessage(job.data);
}, { connection: redis });

worker.on('completed', job => {
    console.log(`Email sent: ${job.id}`);
});

worker.on('failed', (job, err) => {
    console.log(`Failed job ${job.id}: ${err.message}`);
});
