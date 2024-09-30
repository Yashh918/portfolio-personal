import { motion } from 'framer-motion'
import about from '../assets/img/about-img1.png'
import {ABOUT_TEXT} from '../constants/index.js'

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="about-div">
            <h2 className='title'>
                About <span className='me'>Me</span>
            </h2>
            <div className="image-text">
                <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial = {{opacity: 0, x: -100}}
                    transition={{duration: 1, delay: 0.2}}
                    className='box'
                >
                    <div className='image'>
                        <img src={about} alt="about_img"/>
                    </div>
                </motion.div>
                <motion.div 
                 whileInView={{opacity: 1, x: 0}}
                 initial = {{opacity: 0, x: 100}}
                 transition={{duration: 1, delay: 0.2}}
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