import { motion } from 'framer-motion'
import about from '../assets/img/about-img1.png'
import { ABOUT_TEXT } from '../constants/index.js'
import { useEffect, useState } from 'react'

const About = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1200)
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (
        <section className='about' id='about'>
            <div className="about-div">
                <motion.h2
                    className='title'
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    initial={{ opacity: 0, y: 100, scale: 0.9 }}
                    transition={{ duration: 1, delay: isMobile ? 0.4 : 0.2 }}
                >
                    About <span className='me'>Me</span>
                </motion.h2>
                <div className="image-text">
                    <motion.div
                        className='box'
                        whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                        initial={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 100 : 0, scale: 0.9 }}
                        transition={{ duration: 1, delay: isMobile ? 0.2 : 0.2 }}
                    >
                        <div className='image'>
                            <img src={about} alt="about_img" />
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                        initial={{ opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 100 : 0, scale: 0.9 }}
                        transition={{ duration: 1, delay: isMobile ? 0 : 0.2 }}
                        className='box'
                    >
                        <div className='text'>
                            <p className='about-text'>
                                {ABOUT_TEXT}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About