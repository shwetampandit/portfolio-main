import SkygazeImage from "@/assets/skygaze.png";
import MicrositeImage from "@/assets/Microsite.png"
// import TodoImage from "@/assets/todo.png";
import HyperlocalImage from "@/assets/dashboard-banner.png";
import { StaticImageData } from "next/image";
import { cache } from "react";

export interface IProjectData {
  SLUG: string;
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  DESCRIPTION: string[];
  NOTE?: string;
  TECH_STACK: string[];
  IMAGE: StaticImageData;
  HIDDEN: boolean;
}

export const DATA = {
  HEADER: {
    NAME: "Shweta Pandit",
    AGE: "25",
    PRONOUN: "she/her",
    HEADLINE:
      "Passionate about building high-performance and scalable web applications.",
    RESUME:
      "https://drive.google.com/file/d/1JggLS187mqZJ-rpcw8yntY3pciiidrV8/view?usp=sharing",
    EMAIL: "mailto:shwetampandit@gmail.com",
    GITHUB: "https://github.com/shwetampandit",
    LINKEDIN: "https://www.linkedin.com/in/shwetapandit",
  },

  ABOUT_ME: {
    INTRO:
      "Hey! I'm a full-stack developer who loves building efficient, scalable, and intuitive applications. I thrive on solving complex problems, optimizing performance, and creating seamless user experiences.",
    EXPERTISE:
      "My expertise lies in ReactJS, NuxtJS, VueJS, JavaScript, TypeScript and ... technologies, and I enjoy working across the stack to bring ideas to life.",
  },

  EXPERIENCE: {
    "Sekel Tech": {
      WEBSITE: "https://sekel.tech/",
      POSITION: "Frontend Developer",
      LOCATION: "Pune",
      DURATION: "June, 2023 - Dec, 2024",
      DESCRIPTION: [
        "Developed and maintained scalable, SEO-optimized web applications for high-profile clients to boost engagement and visibility.",
        "Built dynamic dashboards using Vue.js and React, integrating third-party APIs ",
        "Utilized modern frameworks and libraries to ensure responsive and dynamic user interfaces.",
        "Participated in code reviews and contributed to the optimization of existing codebases.",
      ],
      TECH_STACK: [
        "Vue.js",
        "React.js",
        "Nuxt.js",
        "Next.js",
        "Tailwind CSS",
        "ShadCN",
        "Material UI",
        "Vuetify",
        "Git & Github",
        "Bitbucket",
        "Slack",
        "Jira",
      ],
    },
    "Maharashtra Knowledge Corporation Limited (MKCL)": {
      WEBSITE: "https://www.mkcl.org/",
      POSITION: "Software Developer",
      LOCATION: "SB Road - Pune",
      DURATION: "Oct, 2022 - June, 2023",
      DESCRIPTION: [
        "Assisted in the development of full-stack LMS applications to support academic initiatives.",
        "Contributed to the development of an eAuction platform",
        "Built reusable Vue components with efficient HTML and Bootstrap, integrating Axios and JWT for secure API communication.",
        "Developing and Collaborated on backend integration using Golang and MongoDB.",
      ],
      TECH_STACK: [
        "Vue.js",
        "Bootstrap",
        "Golang",
        "MongoDB",
        "JWT Authentication",
        "Git & Github",
      ],
    },
    "Maharashtra Knowledge Corporation Limited(MKCL)": {
      WEBSITE: "https://www.mkcl.org/",
      POSITION: "Project Intern",
      LOCATION: "SB Road - Pune",
      DURATION: "March, 2022 - Sep, 2022",
      DESCRIPTION: [
        "Built a responsive admin dashboard using Vue.js with reusable components.",
        "Developed RESTful APIs in PHP and connected to a MySQL database.",
        "Integrated Axios for smooth data exchange between frontend and backend.",
        "Implemented user authentication and CRUD operations.",
      ],
      TECH_STACK: [
        "Vue.js",
        "CSS3",
        "Golang",
        "MySQL",
        "JavaScript (ES6+)",
        "Responsive Design",
        "Git & Github",
      ],
    },
  },

  PROJECTS: {
    Website: {
      SLUG: "website",
      LIVE_PREVIEW: "https://sekel.tech/",
      DESCRIPTION: [
        "Integrated the Razorpay payment gateway to enable secure and seamless transactions",
        "Built a high-performance UI using Next.js and TypeScript, optimizing user experience and system efficiency.",
      ],
      TECH_STACK: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Strapi CSM",
        // "",
        // "",
      ],
      IMAGE: SkygazeImage,
      HIDDEN: false,
    },
    Microsite: {
      SLUG: "microsite",
      LIVE_PREVIEW: "", // add your deployed URL here
      GITHUB: "", // add GitHub repo if available
      DESCRIPTION: [
        "Designed and developed lightweight, dynamic microsites tailored for client campaigns and lead generation.",
        "Implemented SEO best practices, schema markup, and server-side rendering to enhance visibility and performance.",
        "Integrated Geographic Specific Pages (GSP) to improve user targeting and engagement.",
        "Optimized responsiveness and performance across devices using Nuxt.js and Tailwind CSS.",
      ],
      NOTE: "",
      TECH_STACK: [
        "Nuxt.js 3",
        "Pinia",
        "SCSS",
        "SEO Best Practices",
        "Schema Markup",
        "Server-Side Rendering (SSR)",
        "Geographic Specific Pages (GSP)",
      ],
      IMAGE: MicrositeImage, // replace with actual image import
      HIDDEN: false,
    },
    "Hyperlocal Marketing Platform": {
      SLUG: "hyperlocal-marketing-platform",
      // LIVE_PREVIEW: "https://example-hyperlocal-dashboard.vercel.app/", // replace with actual if any
      // GITHUB: "https://github.com/yourusername/hyperlocal-marketing-platform", // replace with actual if any
      DESCRIPTION: [
        "Developed a hyper-local marketing dashboard to enhance targeted advertising in specific areas.",
        "Implemented advanced features such as detailed analytics, location targeting, SEO optimizations, and IVR system integration.",
        "Designed and configured customizable microsites to support diverse marketing campaigns.",
        "Created a user-friendly interface ensuring precise targeting, insightful reporting, and scalability for business growth.",
      ],
      NOTE: "Note: This platform supports businesses in running effective localized marketing campaigns.",
      TECH_STACK: [
        "Vue.js 3",
        "Vuex",
        "Nuxt.js 3",
        "Tailwind CSS",
        "Google Maps API",
        "Razorpay API",
        "IVR Integration",
      ],
      IMAGE: HyperlocalImage, // replace with actual image import or link
      HIDDEN: false,
    },
  },

  ALL_PROJECTS: "https://github.com/shwetampandit",

  EDUCATION: {
    MCA: {
      Degree: "Masters of Computer Application",
      Duration: " Aug 2020 - Jun 2022",
      Score: "84%",
      College: "PES Modern College of Engineering",
    },
    "Bsc-CS": {
      Degree: "Bachelor of Computer Science",
      Duration: " Jun 2017 - May 2020",
      Score: " 69%",
      College: "Jaikranti College of Computer Science",
    },
  },
  SKILLS: {
    Languages: ["JavaScript", "TypeScript", "HTML5", "CSS", "Sass / SCSS"],
    Frameworks: ["React.js", "Next.js", "Nuxt.js", "Vue.js"],
    Libraries: [
      "Vuetify",
      "Tailwind CSS",
      "ShadCN",
      "Material UI",
      "Framer Motion",
      "Chart.js",
    ],
    "Database & Backend": ["MongoDB", "Golang", "REST APIs"],
    "Tools & Platforms": [
      "Git",
      "GitHub",
      "GSC",
      "Postman",
      "Visual Studio Code",
      "SLack",
      "Bitbucket",
      "Jira",
    ],
  },
};

export const getProjectData = cache(
  (title: string) =>
    Object.entries(DATA.PROJECTS).find(
      ([, value]) => value.SLUG === title && !value.HIDDEN
    ) as [string, IProjectData] | undefined
);
