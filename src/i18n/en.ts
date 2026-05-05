import type { TranslationStrings } from "./types";

export const en: TranslationStrings = {
  nav: {
    home: "Home",
    blog: "Blog",
    theme: "Theme",
  },

  hero: {
    greeting: "Hi, I'm",
  },
  description:
    "Full Stack Developer focused on building scalable systems, clean architectures, and high-quality developer experiences.",
  summary:
    "In late 2023, I decided to fully invest in my education and transition into tech. Since then, I've been dedicating myself full-time to learning and building. Today, I'm pursuing a bachelor's degree in software engineering, working as a full-stack developer, and even [compete in a hackathon for fun](/#hackathons).",

  sections: {
    about: "About",
    workExperience: "Work Experience",
    education: "Education",
    skills: "Skills",
  },

  work: {
    title: "Full Stack Software Engineer",
    location: "Remote",
    start: "Nov 2024",
    end: "Current job",
    description:
      "Developed and maintained scalable web applications using React, Next.js, and NestJS. Dockerized microservices architecture, improving deployment consistency and reducing environment issues. Implemented a design system and feature-based architecture to improve code maintainability and team scalability. Built mobile applications with React Native and TypeScript.",
    present: "Present",
  },

  education: {
    degree0: "Full-stack Web Development",
    degree1: "Bachelor's Degree of Software Engineering (BSE)",
    present: "Present",
  },

  projects: {
    badge: "My Projects",
    heading: "Check out my latest work",
    description:
      "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
    tcFoods: {
      description:
        "Developed a food delivery platform inspired by [iFood](https://www.ifood.com.br/), featuring restaurant browsing, dynamic menus, and order management. Focused on building a scalable full-stack architecture using Next.js, PostgreSQL, and Docker.",
      linkType: "Website",
    },
  },

  hackathons: {
    badge: "Hackathons",
    heading: "I like building things",
    description:
      "During my studies in Trybe, I attended {count} hackathon. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.",
    hack0: {
      location: "Rio de Janeiro, Brazil",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
    },
  },

  contact: {
    badge: "Contact",
    heading: "Get in Touch",
    body: {
      beforeLink: "Want to chat? Just shoot me a dm ",
      linkText: "with a direct question on twitter",
      afterLink:
        " and I'll respond whenever I can. I will ignore all soliciting.",
    },
    sendEmail: "Send Email",
  },

  blog: {
    heading: "Blog",
    postCount: "{count} posts",
    subtitle: "My thoughts on software development, life, and more.",
    pagination: {
      pageOf: "Page {current} of {total}",
      previous: "Previous",
      next: "Next",
    },
    empty: "No blog posts yet. Check back soon!",
  },

  blogPost: {
    notFound: "Post not found.",
    backToBlog: "Back to Blog",
    contentUnavailable:
      'Content for "{slug}" will be available after MDX setup.',
    failedToLoad: "Failed to load post.",
    loading: "Loading...",
    previous: "Previous",
    next: "Next",
  },

  notFound: {
    heading: "Page Not Found",
    description:
      "The page you're looking for doesn't exist or may have been moved.",
    goHome: "Go to Home",
  },

  projectCard: {
    openAriaLabel: "Open {title}",
  },

  codeBlock: {
    copyCode: "Copy code",
  },
};
