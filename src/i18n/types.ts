export type Lang = "en" | "pt-BR";

export interface TranslationStrings {
  // Navbar
  nav: {
    home: string;
    blog: string;
    theme: string;
  };

  // Hero / About
  hero: {
    greeting: string; // "Hi, I'm" — name is injected dynamically
  };
  description: string;
  summary: string;

  // Section headings
  sections: {
    about: string;
    workExperience: string;
    education: string;
    skills: string;
  };

  // Work
  work: {
    title: string;
    location: string;
    start: string;
    end: string;
    description: string;
    present: string; // fallback when work.end is null
  };

  // Education
  education: {
    degree0: string; // "Full-stack Web Development"
    degree1: string; // "Bachelor's Degree of Software Engineering (BSE)"
    present: string; // "Present"
  };

  // Projects section
  projects: {
    badge: string; // "My Projects"
    heading: string; // "Check out my latest work"
    description: string;
    // Project 0 — TC Foods
    tcFoods: {
      description: string;
      linkType: string; // "Website"
    };
  };

  // Hackathons section
  hackathons: {
    badge: string; // "Hackathons"
    heading: string; // "I like building things"
    description: string; // compound paragraph with {count} placeholder
    // Hackathon 0
    hack0: {
      location: string;
      description: string;
    };
  };

  // Contact section
  contact: {
    badge: string; // "Contact"
    heading: string; // "Get in Touch"
    body: {
      beforeLink: string; // "Want to chat? Just shoot me a dm "
      linkText: string; // "with a direct question on twitter"
      afterLink: string; // " and I'll respond whenever I can. I will ignore all soliciting."
    };
    sendEmail: string; // "Send Email"
  };

  // Blog page
  blog: {
    heading: string; // "Blog"
    postCount: string; // "{count} posts" / "{count} post" (singular)
    subtitle: string; // "My thoughts on software development..."
    pagination: {
      pageOf: string; // "Page {current} of {total}"
      previous: string;
      next: string;
    };
    empty: string; // "No blog posts yet. Check back soon!"
  };

  // Blog post page
  blogPost: {
    notFound: string;
    backToBlog: string;
    contentUnavailable: string; // 'Content for "{slug}" will be available after MDX setup.'
    failedToLoad: string;
    loading: string;
    previous: string;
    next: string;
  };

  // 404 page
  notFound: {
    heading: string;
    description: string;
    goHome: string;
  };

  // Project card
  projectCard: {
    openAriaLabel: string; // "Open {title}"
  };

  // Code block
  codeBlock: {
    copyCode: string;
  };
}

export type TranslationFn = (key: string) => string;

type NestedKeyOf<T> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends object
        ? `${K}.${NestedKeyOf<T[K]>}`
        : K;
    }[keyof T & string]
  : never;

export type TranslationKey = NestedKeyOf<TranslationStrings>;
