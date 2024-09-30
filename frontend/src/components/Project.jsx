import { motion } from 'framer-motion'
import { PROJECTS } from '../constants/index.js'

const Project = () => {
    return (
        <section className="project" id='projects'>
            <div className="project-div">
                <motion.h2 
                    className="title"
                    whileInView={{opacity:1, y:0}}
                    initial={{opacity:0, y:-90}}
                    transition={{duration:1}}
                >
                    Projects
                </motion.h2>
                <div>
                    {
                        PROJECTS.map((project, index) => (
                            <div className='proj'>
                                <motion.h5
                                    className='name'
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                >
                                    <a 
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => {
                                            if(project.link === "#"){
                                                e.preventDefault()
                                            }
                                        }}

                                    >
                                        {project.title}
                                    </a>
                                </motion.h5>

                                <motion.div
                                    className="info"
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: 100 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                >
                                    <p className="description">
                                        {project.description}
                                    </p>
                                    <p className="tech-div">
                                        {
                                            project.technologies.map((tech, index) => (
                                                <span key={index} className='tech'>{tech}</span>
                                            ))
                                        }
                                    </p>
                                </motion.div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Project