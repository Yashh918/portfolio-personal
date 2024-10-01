import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/webcoded/header-img.svg'
import { useEffect, useState } from "react"
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: [-200, 50, 0],
        opacity: 1,
        transition: { duration: 3, delay: delay }
    }
})

const Banner = () => {
    const toRotate = ['Yashh', 'Web Developer', 'Web designer']
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300)

    useEffect(() => {
        const ticker = setTimeout(() => {
            tick()
        }, delta)

        return () => { clearTimeout(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(100)  // constant deleting time interval
        } else {
            setDelta(200 - Math.random() * 100) // varying typing time interval
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(3000) // waiting time interval before starting to delete
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setDelta(1000) // waiting time interval before starting to type
            setLoopNum(loopNum + 1)
        }

    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <motion.span
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="tagline"
                        >
                            Welcome to my Portfolio
                        </motion.span>
                        <motion.h1
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                        >
                            {`Hi, I'm `}
                            <span className="wrap">{text}</span>
                        </motion.h1>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                        >
                            Turning bugs into features
                        </motion.p>
                        <a href="#contact">
                            <motion.button
                                variants={container(1.5)}
                                initial="hidden"
                                animate="visible"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className='banner-button'
                            >
                                Let's connect <ArrowRightCircle />
                            </motion.button>
                        </a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <motion.img 
                            initial={{ opacity: 0 }}
                            animate={{opacity:1, transition: {duration:3, delay: 0.5}}}
                            src={headerImg} 
                            alt="header image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner