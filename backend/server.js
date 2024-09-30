import express, { Router } from "express";
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
});

const router = Router();
const app = express();
const port = process.env.PORT || 4000

app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(port, () => console.log("Server running on port 5000"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,  // Use environment variables for sensitive info
        pass: process.env.EMAIL_PASS
    }
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to send emails");
    }
});

router.post('/contact', (req, res) => {
    const name = req.body.firstName + " " + req.body.lastName;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    const mail = {
        from: name,
        to: process.env.EMAIL_USER,
        subject: "Contact form submission - portfolio",
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Subject: ${subject}</p>
               <p>Message: ${message}</p>`
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(200).json({
                code: 200,
                message: "Message Sent"
            });
        }
    });
});
