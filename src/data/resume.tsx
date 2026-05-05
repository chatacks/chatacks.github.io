import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Thyago Chatack",
  initials: "TC",
  url: "https://chatacks.github.io/",
  location: "Rio de Janeiro, RJ",
  locationLink: "https://www.google.com/maps/place/riodejaneiro",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "C#", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon },
    { href: "/blog", icon: NotebookIcon },
  ],
  contact: {
    email: "chatack.tc@gmail.com",
    tel: "+5521966344069",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/chatacks",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/thyago-chatack/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/chatacks",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "TeamSoft Technology and Systems",
      href: "https://www.teamsoft.com.br/",
      badges: [],
      logoUrl: "/teamsoft.png",
      start: "2024-11",
      end: null,
    },
  ],
  education: [
    {
      school: "Trybe",
      href: "https://betrybe.com",
      logoUrl: "/trybe.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Anhanguera",
      href: "https://www.anhanguera.com",
      logoUrl: "/anhanguera.png",
      start: "2026",
      end: null,
    },
  ],
  projects: [
    {
      title: "TC Foods",
      href: "https://tc-foods-two.vercel.app/",
      dates: "2024-08/2024-09",
      active: true,
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Docker",
        "Docker-compose",
      ],
      links: [
        {
          href: "https://tc-foods-two.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tc-foods.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "HackTudo",
      dates: "2024-10-11/2024-10-19",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROGJf4m4xhj5Bh5lmnh36Fc1I-SSm5PuXz5A&s",
      mlh: "",
      links: [],
    },
  ],
} as const;
