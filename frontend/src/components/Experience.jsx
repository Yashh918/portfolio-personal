import { motion } from 'framer-motion'
import { EXPERIENCES } from '../constants/index.js'
import { useEffect, useState } from 'react'

const Experience = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024)
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (
        <section className="experience" id="experience">
            <div className="experience-div">
                <motion.h2
                    className="title"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1, delay: isMobile ? 0 : 0.2 }}
                >
                    Experience
                </motion.h2>
                <div>
                    {EXPERIENCES.map((experience, index) => (
                        <div
                            key={index}
                            className='exp'
                        >
                            <motion.div
                                className="year"
                                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                                initial={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 50 : 0, scale: 0.9 }}
                                transition={{ duration: 1, delay: isMobile ? 0 : 0.2 }}
                            >
                                {experience.year}
                            </motion.div>
                            <motion.div
                                className="info"
                                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                                initial={{ opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 50 : 0, scale: 0.9 }}
                                transition={{ duration: 1, delay: isMobile ? 0.2 : 0.2 }}

                            >
                                <h5 className='role'>
                                    {experience.role} - {" "}
                                    <span className='company'>
                                        {experience.company}
                                    </span>
                                </h5>
                                <p className='description'>
                                    {experience.description}
                                </p>
                                <p className='tech-div'>
                                    {experience.technologies.map((tech, index) => (
                                        <span key={index} className='tech'>{tech}</span>
                                    ))}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience