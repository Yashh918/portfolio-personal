import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false);
    const [showNav, setShowNav] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const threshold = 25;

    useEffect(() => {
        const onScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY < 50) {
                setShowNav(true)
            }

            if (currentScrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            if (currentScrollY - lastScrollY > threshold) {
                setShowNav(false)
            } else if (lastScrollY - currentScrollY > threshold) {
                setShowNav(true)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [lastScrollY])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    const handleToggle = (expanded) => {
        setIsExpanded(expanded);
    };

    return (
        <Navbar
            expand="lg"
            className={`${scrolled || isExpanded ? 'navbar-scrolled' : ''} ${showNav ? 'navbar-visible' : 'navbar-hidden'}`}
            onToggle={handleToggle}
            expanded={isExpanded}
        >
            <Container>
                <Navbar.Brand href="#home">
                    <div className='navbar-logo'>Yashh</div>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
                            className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('home')}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#about"
                            className={activeLink === 'about' ? 'active-navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('about')}
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('skills')}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('projects')}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            href="#experience"
                            className={activeLink === 'experience' ? 'active-navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('experience')}
                        >
                            Experience
                        </Nav.Link>
                    </Nav>

                    <span className='navbar-text'>
                        <span className='social-icons'>
                            <a
                                href="https://github.com/Yashh918"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SocialIcon network='github' className="social-icon github" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/yashh-dhopesshwarkar-"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SocialIcon network='linkedin' className="social-icon linkedin" />
                            </a>
                            {/* <SocialIcon network='upwork' className="social-icon upwork" /> */}
                        </span>
                        <a href="#contact">
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                className='navbar-connect'
                            >
                                Let's connect
                            </motion.button>
                        </a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;