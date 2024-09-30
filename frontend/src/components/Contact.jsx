import { useState } from "react";
import contact from '../assets/img/contact-img.svg'
import { motion } from "framer-motion";

const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({});
    const [visible, setVisible] = useState(false);

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");

        try {
            // const liveUrl = "https://portfolio-yashh.onrender.com"
            const liveUrl = "http://localhost:5000"

            // // fetching token first for auth
            // const tokenResponse = await fetch(`${liveUrl}/auth/token`);
            // const { token } = await tokenResponse.json();
            // console.log(token);
            

            // now sending contact form data with token as auth header
            let response = await fetch(`${liveUrl}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(formDetails),
            });

            let result = await response.json();
            setFormDetails(formInitialDetails);
            setButtonText("Send");

            if (result.code === 200) {
                setStatus({ success: true, message: "Message sent successfully" });
            } else {
                setStatus({ success: false, message: "Something went wrong" });
            }

            setVisible(true)
            setTimeout(() => {
                setVisible(false);
            }, 4000);
        } catch (error) {
            setStatus({ success: false, message: "Something went wrong" });
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-div">
                <h2 className="title">
                    Contact me
                </h2>
                <div className="image-form">
                    <div className="box">
                        <div className="image">
                            <img src={contact} alt="contact_img" />
                        </div>
                    </div>
                    <div className="box">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col">
                                    <div className="half">
                                        <motion.input
                                            whileInView={{ opacity: 1, y: 0 }}
                                            initial={{ opacity: 0, y: -90 }}
                                            transition={{ duration: 1, delay: 0 }}
                                            type="text"
                                            value={formDetails.firstName}
                                            placeholder="First name"
                                            onChange={(e) => onFormUpdate("firstName", e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="half">
                                        <motion.input
                                            whileInView={{ opacity: 1, y: 0 }}
                                            initial={{ opacity: 0, y: -90 }}
                                            transition={{ duration: 1, delay: 0.1 }}
                                            type="text"
                                            value={formDetails.lastName}
                                            placeholder="Last name"
                                            onChange={(e) => onFormUpdate("lastName", e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <motion.input
                                        whileInView={{ opacity: 1, x: 0 }}
                                        initial={{ opacity: 0, x: -90 }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        type="tel"
                                        value={formDetails.phone}
                                        placeholder="Phone Number"
                                        onChange={(e) => onFormUpdate("phone", e.target.value)}
                                    />
                                </div>
                                <div className="col">
                                    <motion.input
                                        whileInView={{ opacity: 1, x: 0 }}
                                        initial={{ opacity: 0, x: 90 }}
                                        transition={{ duration: 1, delay: 0.3 }}
                                        type="email"
                                        value={formDetails.email}
                                        placeholder="Email"
                                        onChange={(e) => onFormUpdate("email", e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <motion.input
                                        whileInView={{ opacity: 1, x: 0 }}
                                        initial={{ opacity: 0, x: -90 }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                        type="text"
                                        value={formDetails.subject}
                                        placeholder="Subject"
                                        onChange={(e) => onFormUpdate("subject", e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <motion.textarea
                                        whileInView={{ opacity: 1, y: 0 }}
                                        initial={{ opacity: 0, y: 90 }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        placeholder="Message"
                                        value={formDetails.message}
                                        onChange={(e) => onFormUpdate("message", e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <motion.div
                                        className="button-container"
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        initial={{ opacity: 0, scale: 0.4 }}
                                        transition={{ duration: 1, delay: 0.6 }}
                                    >
                                        <span className="button-text">{buttonText}</span>
                                        <button disabled={buttonText === "Sending..."}>
                                            {buttonText}
                                        </button>
                                    </motion.div>
                                </div>
                                {visible && (
                                    <div className="col">
                                        <p className={status.success === false ? "danger" : "success"}>
                                            {status.message}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
