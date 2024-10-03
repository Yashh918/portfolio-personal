import { link } from "framer-motion/client";

const ABOUT_TEXT = `I'm a full Stack developer with a passion for developing user-friendly web applications. I thrive on new challenges and love learning new things. I have worked with a variety of technologies, including React, Next.js, Node.js, Express.js, PostgreSQL, and MongoDB. While I'm still learning, I am putting great effort into development and high-quality work. Definitely looking forward to taking new challenges and contributing to projects with loads of enthusiasm and a refresher perspective`;

const EXPERIENCES = [
  {
    year: "2024 Aug - 2024 Sept",
    role: "Web Developer Intern",
    company: "DigiGlobe Solutions",
    description: "Designed and developed a visually appealing and user-friendly hero section for a website to effectively capture the user's attention and convey the core message of the website",
    technologies: ["Javascript", "React.js"]
  }
];

const PROJECTS = [
  {
    title: "WatchHaven - Video Sharing Platform",
    description: "Developed the back-end for a comprehensive video sharing platform with features like login, sign-up, upload video, like, dislike, comment, reply, subscribe, unsubscribe, and many more.",
    technologies: ["Node.js", "Expressjs", "MongoDB", "JWT", "Mongoose", "Postman"],
    link: "https://github.com/Yashh918/WatchHaven"
  },
  {
    title: "NewsMonke - NewsFetching App",
    description:
      "A web application that fetches and displays the latest news articles from various sources with category filtering that allows users to filter news by categories such as technology, sports, entertainment, etc.",
    technologies: ["Reactjs", "Bootstrap", "News API"],
    link: "https://github.com/Yashh918/NewsMonke"
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    link: "#"
  }
];

export {
  ABOUT_TEXT,
  EXPERIENCES,
  PROJECTS
}