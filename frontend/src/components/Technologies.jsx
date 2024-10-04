import { motion, useAnimation } from "framer-motion"
import { useState, useEffect } from "react"
import { FaJava, FaNodeJs, FaReact } from "react-icons/fa"
import { RiNextjsLine } from "react-icons/ri"
import { SiExpress, SiMongodb } from "react-icons/si"

const iconVariants = (duration, isDragging) => ({
    initial: { y: -10 },
    animate: {
        y: [-10, 10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    },
})

const DraggableIcon = ({ children, duration }) => {
    const controls = useAnimation();
    const [isDragging, setIsDragging] = useState(false);

    const handleDragStart = () => {
        setIsDragging(true);
        controls.stop(); // Stop the bouncing animation when dragging starts
    };

    const handleDragStop = () => {
        setIsDragging(false);
        setTimeout(() => {
            controls.start("animate"); // Resume the bounce animation with a delay
        }, 7000);
    };

    useEffect(() => {
        controls.start("animate");
    }, [controls]);

    return (
        <motion.div
            variants={iconVariants(duration)}
            initial="animate"
            animate={controls}
            drag
            onDragStart={handleDragStart}
            onDragEnd={handleDragStop}
            dragTransition={{ bounceStiffness: 50, bounceDamping: 2 }}
            dragConstraints={{
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }}
            dragElastic={0.4}
            style={{
                cursor: "grab"
            }}
        >
            {children}
        </motion.div>
    );
};



const Technologies = () => {
    return (
        <section className="technologies" id="skills">
            <div className="technologies-div">
                <h2>
                    Technologies
                </h2>
                <motion.div
                    className="tech-icon-div"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1 }}
                >

                    <DraggableIcon duration={2}>
                        <div className="tech-icon react">
                            <FaReact />
                        </div>
                    </DraggableIcon>

                    <DraggableIcon duration={4}>
                        <div className="tech-icon next">
                            <RiNextjsLine />
                        </div>
                    </DraggableIcon>

                    <DraggableIcon duration={3}>
                        <div className="tech-icon express">
                            <SiExpress />
                        </div>
                    </DraggableIcon>

                    <DraggableIcon duration={2}>
                        <div className="tech-icon mongodb">
                            <SiMongodb />
                        </div>
                    </DraggableIcon>

                    <DraggableIcon duration={4}>
                        <div className="tech-icon nodejs">
                            <FaNodeJs />
                        </div>
                    </DraggableIcon>

                    <DraggableIcon duration={3}>
                        <div className="tech-icon java">
                            <FaJava />
                        </div>
                    </DraggableIcon>
                </motion.div>
            </div>
        </section>
    )
}

export default Technologies