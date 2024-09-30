import nodemailer from 'nodemailer';

const sendMail = async (req, res) => {
    try {
        const name = req.body.firstName + " " + req.body.lastName;
        const email = req.body.email;
        const subject = req.body.subject;
        const message = req.body.message;
        const mail = {
            from: name,
            to: process.env.EMAIL_USER,
            subject: "portfolio - Contact form submission",
            html: `<p>Name: ${name}</p>
                   <p>Email: ${email}</p>
                   <p>Subject: ${subject}</p>
                   <p>Message: ${message}</p>`
        };
        
        const contactEmail = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
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
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export {
    sendMail
}