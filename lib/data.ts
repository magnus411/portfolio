export type ProjectLink = {
  url: string;
  title: string;
  type: "github" | "demo" | "docs";
};

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  tags?: string[];
  category: "programming" | "design" | "work" | "education";
  links?: ProjectLink[];
  features?: string[];
  technologies?: string[];
  period?: string;
  company?: string;
  date?: string; // For sorting purposes
};

export const projects: Project[] = [
  // Work Experience (sorted by date, newest first, with current positions at top)
  {
    id: "jotunheimen-leadership",
    title: "Technical Lead & Design Producer at Jotunheimen AS",
    description: "Leading technical operations and design initiatives for an esports center with 100 PCs and innovative systems.",
    longDescription: "As Technical Lead and Design Producer at Jotunheimen, I manage the operation of 100 gaming PCs and server infrastructure while developing innovative systems. I've designed the facility, created the website, and produced various marketing materials including logos, brochures, films, and photos. The role combines technical expertise with creative direction.",
    category: "work",
    period: "April 2021 - Present",
    date: "2024-04-01", // Adjusted to ensure it appears at top
    tags: ["Technical Leadership", "System Administration", "Design", "Content Production"],
    links: [
      {
        url: "https://jotunheimenesport.no",
        title: "Company Website",
        type: "demo"
      }
    ],
    technologies: ["NextJS", "Builder.io", "System Administration", "Content Creation"]
  },
  {
    id: "gtp-design",
    title: "Design & Content Producer at GTP AS",
    description: "Leading content creation and marketing strategies across multiple media formats.",
    longDescription: "Responsible for all aspects of film, photography, graphic design, web development, and marketing strategies for the company. The role involves creating comprehensive media solutions and implementing effective marketing tactics.",
    category: "work",
    period: "October 2019 - Present",
    date: "2024-03-01", // Adjusted to ensure it appears near top
    tags: ["Content Production", "Marketing", "Design", "Web Development"]
  },
  {
    id: "bookibud-developer",
    title: "System Developer at Bookibud",
    description: "Upcoming role as a system developer focusing on software development and system architecture.",
    longDescription: "Taking on a new role as a system developer at Bookibud, contributing to the development and maintenance of their software systems.",
    category: "work",
    period: "June 25, 2024 - August 25, 2024",
    date: "2024-06-25",
    tags: ["Software Development", "System Architecture"]
  },
  {
    id: "team-midgard",
    title: "Design & Content Producer at Team Midgard AS",
    description: "Led content creation and marketing initiatives across various media formats.",
    longDescription: "Responsible for all aspects of film, photo, graphic design, web development, and marketing strategies for the company. Created comprehensive media solutions and implemented effective marketing tactics.",
    category: "work",
    period: "August 2019 - January 2022",
    date: "2019-08-01",
    tags: ["Content Production", "Marketing", "Design", "Web Development"]
  },
  {
    id: "icgroup-website",
    title: "Web Developer for IcGroup AS",
    description: "Led the rebranding initiative through website development.",
    longDescription: "Contracted to develop a new website as part of IcGroup's (formerly Iconomy AS) rebranding initiative. Created a professional WordPress-based solution that aligned with their new brand identity.",
    category: "work",
    period: "April 2022",
    date: "2022-04-01",
    tags: ["Web Development", "WordPress", "Branding"],
    links: [
      {
        url: "https://www.icgroup.no/",
        title: "IcGroup Website",
        type: "demo"
      }
    ]
  },
  {
    id: "sonans-consulting",
    title: "Technical Consultant at Sonans Trondheim",
    description: "Provided expert consultation on multi-camera streaming setup and solutions.",
    longDescription: "Served as a consultant for Sonans, producing a comprehensive report on multi-camera streaming setup, including technical recommendations and solutions for various streaming challenges.",
    category: "work",
    period: "February 2022",
    date: "2022-02-01",
    tags: ["Consulting", "Streaming", "Technical Documentation"]
  },
  {
    id: "elkjop-sales",
    title: "Sales Consultant at Elkjøp Tillertorget",
    description: "Specialized in technology sales and customer service excellence.",
    category: "work",
    period: "April 2020 - October 2021",
    date: "2020-04-01",
    tags: ["Sales", "Technology", "Customer Service"]
  },
  {
    id: "telenor-sales",
    title: "Sales Consultant at Telenor City Syd",
    description: "Developed advanced sales techniques and customer relationship management skills.",
    longDescription: "Gained extensive experience in sales techniques and customer satisfaction strategies. Developed skills in understanding different personality types and creating value propositions that benefit both customers and the company.",
    category: "work",
    period: "August 2019 - June 2020",
    date: "2019-08-01",
    tags: ["Sales", "Customer Service", "Communication"]
  },
  {
    id: "kongsberg-maritime",
    title: "Production Associate at Kongsberg Maritime AS",
    description: "Responsible for producing various components in Kongsberg Maritime's portfolio.",
    category: "work",
    period: "June 2019 - July 2019",
    date: "2019-06-01",
    tags: ["Production", "Manufacturing"]
  },
  {
    id: "lumiere-leadership",
    title: "CEO at Lumière UB",
    description: "Led creative projects and managed team operations as CEO of the youth enterprise.",
    longDescription: "As CEO of Lumière Youth Enterprise, I directed various projects and managed team operations. This role developed my leadership skills and project management abilities in a creative business context.",
    category: "work",
    period: "October 2018 - June 2019",
    date: "2018-10-01",
    tags: ["Leadership", "Project Management", "Creative Direction"]
  },
  {
    id: "kiwi-retail",
    title: "Retail Associate at NG KIWI Midt-Norge AS",
    description: "Gained foundational experience in customer service and retail operations.",
    category: "work",
    period: "November 2014 - September 2019",
    date: "2014-11-01",
    tags: ["Retail", "Customer Service"]
  },

  // Education
  {
    id: "ntnu-computer-engineering",
    title: "Bachelor in Computer Engineering",
    description: "Pursuing a comprehensive education in computer engineering and software development.",
    category: "education",
    period: "August 2022 - Present",
    date: "2022-08-01",
    company: "NTNU"
  },
  {
    id: "noroff-education",
    title: "Network and System Administration",
    description: "Comprehensive study program focusing on network infrastructure and system administration.",
    category: "education",
    period: "October 2020 - August 2021",
    date: "2020-10-01",
    company: "Noroff",
    tags: ["Network Administration", "System Administration", "Infrastructure"]
  },
  {
    id: "tiller-media",
    title: "Media and Communication",
    description: "Comprehensive education in media production, communication, and digital content creation.",
    category: "education",
    period: "August 2016 - June 2019",
    date: "2016-08-01",
    company: "Tiller VGS",
    tags: ["Media Production", "Communication", "Digital Content"]
  },

  // Programming Projects
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    description: "This portfolio website built with Next.js and modern web technologies.",
    longDescription: "A modern, responsive portfolio website showcasing my work and experience. Built with Next.js, TypeScript, and Tailwind CSS, featuring dynamic content management and smooth animations.",
    category: "programming",
    date: "2024-03-01",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    links: [
      {
        url: "https://github.com/magnus411/portfolio",
        title: "GitHub Repository",
        type: "github"
      }
    ],
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: "jotunheimen-website",
    title: "Jotunheimen Esport Website",
    description: "Modern website for Jotunheimen Esport built with Next.js and Builder.io",
    longDescription: "Developed and maintained the official website for Jotunheimen Esport using Next.js and Builder.io. The site features dynamic content management, responsive design, and seamless integration with marketing tools.",
    category: "programming",
    date: "2023-06-01",
    tags: ["Next.js", "Builder.io", "React", "Web Development"],
    links: [
      {
        url: "https://jotunheimenesport.no",
        title: "Live Website",
        type: "demo"
      }
    ],
    technologies: ["Next.js", "Builder.io", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Dynamic content management",
      "Responsive design",
      "Event scheduling",
      "Booking system integration"
    ]
  },
  {
    id: "dynamic-display",
    title: "Dynamic Content Display System",
    description: "Web application for dynamically updating display content across multiple screens.",
    longDescription: "Developed a web application that enables dynamic updates of display content, including Twitch streams and event information. Originally created for Jotunheimen but designed to be scalable for broader use.",
    category: "programming",
    date: "2023-03-01",
    tags: ["Next.js", "React", "Full Stack"],
    links: [
      {
        url: "https://gitfront.io/r/user-2631487/JborpsnBrjLb/Dynamic-Display-of-content/",
        title: "Project Repository",
        type: "github"
      }
    ],
    technologies: ["Next.js", "React", "Real-time Updates"]
  },
  {
    id: "dynamic-scoreboard",
    title: "Dynamic Scoreboard Retropie",
    description: "Full-stack application enabling score tracking via QR code scanning for Retropie games.",
    longDescription: "Developed a backend API and website that allows players to save their Retropie game scores by scanning a QR code and entering their name. Scores are dynamically updated and displayed on a physical scoreboard in the facility.",
    category: "programming",
    date: "2023-01-15",
    tags: ["Python", "Flask", "Next.js", "Full Stack"],
    links: [
      {
        url: "https://gitfront.io/r/user-2631487/uvVrS56p7dju/Dynamic-Scoreboard-Retropie/",
        title: "Project Repository",
        type: "github"
      }
    ],
    technologies: ["Python", "Flask", "Next.js", "REST API", "QR Code Integration"]
  },

  // Design Projects
  {
    id: "rome-3d",
    title: "Rome 3D Visualization",
    description: "Detailed 3D visualization of ancient Roman architecture and urban planning.",
    image: "https://i.imgur.com/JiF1rPJ.jpeg",
    category: "design",
    date: "2023-05-01",
    tags: ["3D Modeling", "Historical Visualization", "Blender", "Architecture"]
  },
  {
    id: "jotunheimen-3d",
    title: "Jotunheimen Esport 3D Design",
    description: "Comprehensive 3D visualization of Jotunheimen EsportCenter.",
    longDescription: "Created detailed 3D visualizations of Jotunheimen EsportCenter using Blender. This project was instrumental in the planning phase, allowing stakeholders to visualize the final result and make informed decisions about the layout and design.",
    image: "https://i.imgur.com/oRtEoPe.png",
    category: "design",
    date: "2023-02-01",
    tags: ["Blender", "3D Modeling", "Interior Design", "Architectural Visualization"],
    technologies: ["Blender", "3D Modeling", "Lighting", "Texturing"],
    features: [
      "Detailed interior visualization",
      "Gaming setup layouts",
      "Communal areas design",
      "Lighting studies"
    ],
    links: [
      {
        url: "https://i.imgur.com/cCr5sjV.png",
        title: "Additional View 1",
        type: "demo"
      },
      {
        url: "https://i.imgur.com/Dv7OQEs.png",
        title: "Additional View 2",
        type: "demo"
      }
    ]
  },
  {
    id: "astronaut-3d",
    title: "Astronaut 3D School Project",
    description: "Detailed 3D modeling project featuring an astronaut character design.",
    image: "https://i.imgur.com/bwHN1ux.jpg",
    category: "design",
    date: "2022-11-01",
    tags: ["3D Modeling", "Character Design", "Blender"],
    links: [
      {
        url: "https://imgur.com/nxeYeVS",
        title: "Additional View",
        type: "demo"
      }
    ]
  }
];