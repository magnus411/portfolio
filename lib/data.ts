export type ProjectLink = {
  url: string;
  title: {
    en: string;
    no: string;
  };
  type: "github" | "demo" | "docs";
};

export type Project = {
  id: string;
  title: {
    en: string;
    no: string;
  };
  description: {
    en: string;
    no: string;
  };
  longDescription?: {
    en: string;
    no: string;
  };
  image?: string;
  tags?: string[];
  category: "programming" | "design" | "work" | "education";
  links?: ProjectLink[];
  features?: string[];
  technologies?: string[];
  period?: string;
  company?: string;
  date?: string;
};

export const projects: Project[] = [
  {
    id: "jotunheimen-leadership",
    title: {
      en: "Technical Lead at Jotunheimen AS",
      no: "Teknisk ansvarlig ved Jotunheimen AS",
    },
    description: {
      en: "Responsible for maintaining and developing the technical systems behind Jotunheimen E-sports center, including 100 gaming PCs and servers.",
      no: "Ansvarlig for vedlikehold og utvikling av de tekniske systemene bak Jotunheimen E-sportsenter, inkludert 100 gaming-PCer og servere.",
    },
    longDescription: {
      en: "As Technical Lead at Jotunheimen E-sports Center, I am responsible for the day-to-day operation and maintenance of over 100 active gaming PCs, servers, and the entire network infrastructure. My role includes managing Windows Server environments, gaming software configurations, automatic deployments, and ensuring high system availability. I also develop systems and internal software to streamline staff workflows and enhance the overall experience at the center. In addition to infrastructure, I manage the official website and contribute to the technical and creative development of new features and digital content.",
      no: "Som teknisk ansvarlig ved Jotunheimen E-sportsenter er jeg ansvarlig for den daglige driften og vedlikeholdet av over 100 aktive gaming-PCer, servere og hele nettverksinfrastrukturen. Rollen min inkluderer administrasjon av Windows Server-miljøer, konfigurasjon av spillprogramvare, automatiske distribusjoner og sikring av høy systemtilgjengelighet. Jeg utvikler også systemer og intern programvare for å strømlinjeforme arbeidsflyter og forbedre opplevelsen på senteret. I tillegg til infrastruktur administrerer jeg den offisielle nettsiden og bidrar til den tekniske og kreative utviklingen av nye funksjoner og digitalt innhold.",
    },
    category: "work",
    period: "April 2021 - Present",
    date: "2024-04-01",
    links: [
      {
        url: "https://jotunheimenesport.no",
        title: {
          en: "Company Website",
          no: "Bedriftens nettsted",
        },
        type: "demo",
      },
    ],
    technologies: [],
  },
  {
    id: "gtp-design",
    title: {
      en: "Design & Content Producer at GTP AS",
      no: "Design- og innholdsprodusent ved GTP AS",
    },
    description: {
      en: "Leading content creation and marketing strategies across multiple media formats.",
      no: "Ledet innholdsproduksjon og markedsføringsstrategier på tvers av flere medieformater.",
    },
    longDescription: {
      en: "Responsible for all aspects of film, photography, graphic design, web development, and marketing strategies for the company. The role involves creating comprehensive media solutions and implementing effective marketing tactics.",
      no: "Ansvarlig for alle aspekter av film, fotografi, grafisk design, nettutvikling og markedsføringsstrategier for selskapet. Rollen innebærer å lage omfattende medieløsninger og implementere effektive markedsføringstaktikker.",
    },
    category: "work",
    period: "October 2019 - Present",
    date: "2024-03-01",
    tags: [],
  },
  {
    id: "jotunheimen-design-producer",
    title: {
      en: "Content and Design Producer at Jotunheimen AS",
      no: "Design- og innholdsprodusent ved Jotunheimen AS",
    },
    description: {
      en: "Designed the Jotunheimen E-sports center from the ground up and produced visual content for branding and marketing.",
      no: "Designet Jotunheimen E-sportssenter fra bunnen av og produserte visuelt innhold for merkevarebygging og markedsføring.",
    },
    longDescription: {
      en: "From 2021 to 2023, I worked as the Content and Design Producer at Jotunheimen E-sports Center. I was responsible for the full visual concept of the center, designing the facility layout and atmosphere using Blender before construction even began. I created the brand identity, including logos, wall art, and the overall look and feel of the space. Over the years, I produced a wide range of high-quality marketing materials, including promotional films, photography, and graphic design for both digital and print platforms. My work shaped the visual identity of Jotunheimen and played a central role in its public image. I was also responsible for the marketing strategy, including social media management and content production.",
      no: "Fra 2021 til 2023 jobbet jeg som design- og innholdsprodusent ved Jotunheimen E-sportssenter. Jeg var ansvarlig for hele det visuelle konseptet til senteret, og designet anleggets layout og atmosfære ved hjelp av Blender før byggingen startet. Jeg skapte merkevareidentiteten, inkludert logoer, veggkunst og det helhetlige utseendet og følelsen av rommet. Gjennom årene produserte jeg et bredt spekter av markedsføringsmaterialer av høy kvalitet, inkludert reklamefilmer, fotografering og grafisk design for både digitale og trykte plattformer. Arbeidet mitt formet den visuelle identiteten til Jotunheimen og spilte en sentral rolle i dens offentlige image. Jeg var også ansvarlig for markedsføringsstrategien, inkludert administrasjon av sosiale medier og innholdsproduksjon.",
    },
    category: "work",
    period: "April 2021 - April 2023",
    date: "2023-04-01",
    tags: [],
    links: [
      {
        url: "https://jotunheimenesport.no",
        title: {
          en: "Company Website",
          no: "Bedriftens nettsted",
        },
        type: "demo",
      },
    ],
    technologies: [],
  },
  {
    id: "team-midgard",
    title: {
      en: "Design & Content Producer at Team Midgard AS",
      no: "Design- og innholdsprodusent ved Team Midgard AS",
    },
    description: {
      en: "Handled the full scope of branding, content production, and marketing for the company.",
      no: "Håndterte hele omfanget av merkevarebygging, innholdsproduksjon og markedsføring for selskapet.",
    },
    longDescription: {
      en: "I was responsible for all design and content production at Team Midgard AS. I designed the company's website, created the logo, and developed the full visual identity, including team jerseys and promotional materials. I also produced a wide range of marketing content such as videos, photography, and graphic posters. In addition, I led marketing strategies and executed campaigns to grow the brand across digital platforms.",
      no: "Jeg var ansvarlig for all design og innholdsproduksjon ved Team Midgard AS. Jeg designet selskapets nettside, laget logoen og utviklet den fullstendige visuelle identiteten, inkludert lagdrakter og promoteringsmaterialer. Jeg produserte også et bredt spekter av markedsføringsinnhold som videoer, fotografier og grafiske plakater. I tillegg ledet jeg markedsføringsstrategier og gjennomførte kampanjer for å vokse merkevaren på tvers av digitale plattformer.",
    },
    category: "work",
    period: "August 2019 - January 2022",
    date: "2019-08-01",
    tags: [],
    technologies: [],
  },

  {
    id: "icgroup-website",
    title: {
      en: "Web Developer for IcGroup AS",
      no: "Nettutvikler for IcGroup AS",
    },
    description: {
      en: "Led the rebranding initiative through website development.",
      no: "Ledet rebranding-initiativet gjennom nettstedutvikling.",
    },
    longDescription: {
      en: "Contracted to develop a new website as part of IcGroup's (formerly Iconomy AS) rebranding initiative. Created a professional WordPress-based solution that aligned with their new brand identity.",
      no: "Kontrahert for å utvikle et nytt nettsted som en del av IcGroups (tidligere Iconomy AS) rebranding-initiativ. Skapte en profesjonell WordPress-basert løsning som samsvarte med deres nye merkevareidentitet.",
    },
    category: "work",
    period: "April 2022",
    date: "2022-04-01",
    links: [
      {
        url: "https://www.icgroup.no/",
        title: {
          en: "IcGroup Website",
          no: "IcGroup nettsted",
        },
        type: "demo",
      },
    ],
  },
  {
    id: "sonans-consulting",
    title: {
      en: "Technical Consultant at Sonans Trondheim",
      no: "Teknisk konsulent ved Sonans Trondheim",
    },
    description: {
      en: "Provided expert consultation on multi-camera streaming setup and solutions.",
      no: "Ga ekspertrådgivning om oppsett og løsninger for flerkamera-strømming.",
    },
    longDescription: {
      en: "Served as a consultant for Sonans, producing a comprehensive report on multi-camera streaming setup, including technical recommendations and solutions for various streaming challenges.",
      no: "Fungerte som konsulent for Sonans, og produserte en omfattende rapport om flerkamera-strømmingsoppsett, inkludert tekniske anbefalinger og løsninger for ulike strømmingsutfordringer.",
    },
    category: "work",
    period: "February 2022",
    date: "2022-02-01",
    tags: [],
  },
  {
    id: "elkjop-sales",
    title: {
      en: "Sales Consultant at Elkjøp Tillertorget",
      no: "Salgskonsulent ved Elkjøp Tillertorget",
    },
    description: {
      en: "Worked as a sales consultant at Elkjop, at the tele department. I was responsible for selling mobile phones, tablets, and accessories, as well as selling mobile subscriptions. This role helped me develop my sales skills and customer service abilities.",
      no: "Jobbet som salgskonsulent hos Elkjøp, på teleavdelingen. Jeg var ansvarlig for å selge mobiltelefoner, nettbrett og tilbehør, samt mobilabonnementer. Denne rollen hjalp meg med å utvikle mine salgsevner og kundeserviceferdigheter.",
    },
    category: "work",
    period: "April 2020 - October 2021",
    date: "2020-04-01",
    tags: [],
  },
  {
    id: "telenor-sales",
    title: {
      en: "Sales Consultant at Telenor City Syd",
      no: "Salgskonsulent hos Telenor City Syd",
    },
    description: {
      en: "Worked as a sales consultant at Telenor, specializing in mobile phones, tablets, and subscriptions. Developed strong customer service skills and sales techniques.",
      no: "Jobbet som salgskonsulent hos Telenor, spesialisert på mobiltelefoner, nettbrett og abonnementer. Utviklet sterke kundeserviceferdigheter og salgsteknikker.",
    },
    longDescription: {
      en: "Gained extensive experience in sales techniques and customer satisfaction strategies. Developed skills in understanding different personality types and creating value propositions that benefit both customers and the company.",
      no: "Fikk omfattende erfaring med salgsteknikker og kundetilfredshetsstrategier. Utviklet ferdigheter i å forstå forskjellige personlighetstyper og skape verdiforslag som gagner både kunder og bedriften.",
    },
    category: "work",
    period: "August 2019 - June 2020",
    date: "2019-08-01",
    tags: [],
  },

  {
    id: "kongsberg-maritime",
    title: {
      en: "Production Associate at Kongsberg Maritime AS",
      no: "Produksjonsmedarbeider hos Kongsberg Maritime AS",
    },
    description: {
      en: "Responsible for producing various components in Kongsberg Maritime's portfolio.",
      no: "Ansvarlig for produksjon av ulike komponenter i Kongsberg Maritimes portefølje.",
    },
    category: "work",
    period: "June 2019 - July 2019",
    date: "2019-06-01",
    tags: [],
  },
  {
    id: "lumiere-leadership",
    title: {
      en: "CEO at Lumière UB",
      no: "Daglig leder i Lumière UB",
    },
    description: {
      en: "Led creative projects and managed team operations as CEO of the youth enterprise.",
      no: "Ledet kreative prosjekter og administrerte teamoperasjoner som daglig leder for ungdomsbedriften.",
    },
    longDescription: {
      en: "As CEO of Lumière Youth Enterprise, I directed various projects and managed team operations. This role developed my leadership skills and project management abilities in a creative business context.",
      no: "Som daglig leder i Lumière ungdomsbedrift, ledet jeg ulike prosjekter og administrerte teamoperasjoner. Denne rollen utviklet mine lederevner og prosjektledelsesevner i en kreativ forretningskontekst.",
    },
    category: "work",
    period: "October 2018 - June 2019",
    date: "2018-10-01",
    tags: [],
  },
  {
    id: "kiwi-retail",
    title: {
      en: "Retail Associate at NG KIWI Midt-Norge AS",
      no: "Butikkmedarbeider hos NG KIWI Midt-Norge AS",
    },
    description: {
      en: "I started working at Kiwi when I was 14 years old. This gave me a foundational experience in customer service and retail operations, but most of all, it taught me to work hard at an early age.",
      no: "Jeg begynte å jobbe hos Kiwi da jeg var 14 år gammel. Dette ga meg grunnleggende erfaring med kundeservice og butikkdrift, men fremfor alt lærte det meg å jobbe hardt i en tidlig alder.",
    },
    category: "work",
    period: "November 2014 - September 2019",
    date: "2014-11-01",
    tags: [],
  },

  // Education
  {
    id: "ntnu-computer-engineering",
    title: {
      en: "Bachelor in Computer Engineering",
      no: "Dataingeniør Bachelor",
    },
    description: {
      en: "Pursuing a education in computer engineering and software development.",
      no: "Jeg studerer dataingeniør på NTNU.",
    },
    category: "education",
    period: "August 2022 - Present",
    date: "2022-08-01",
    company: "NTNU",
  },
  {
    id: "noroff-education",
    title: {
      en: "Network and System Administration",
      no: "Nettverk og systemadministrasjon",
    },
    description: {
      en: "One year study program focusing on network infrastructure and system administration.",
      no: "Ett års studieprogram med fokus på nettverksinfrastruktur og systemadministrasjon.",
    },
    category: "education",
    period: "October 2020 - August 2021",
    date: "2020-10-01",
    company: "Noroff",
    tags: [],
  },
  {
    id: "tiller-media",
    title: {
      en: "Media and Communication (VGS)",
      no: "Medier og kommunikasjon (VGS)",
    },
    description: {
      en: "Upper secondary education in media production, communication, and digital content creation. Graduated with general university admissions certification.",
      no: "Videregående utdanning innen medieproduksjon, kommunikasjon og digital innholdsproduksjon. Uteksaminert med generell studiekompetanse.",
    },
    longDescription: {
      en: "Completed a three-year upper secondary education (VGS) at Tiller VGS with a specialization in Media and Communication. The program covered film and photo production, graphic design, journalism, and digital storytelling. Graduated with general university admissions certification (generell studiekompetanse).",
      no: "Fullførte en treårig videregående utdanning på Tiller VGS med spesialisering i medier og kommunikasjon. Programmet dekket film- og fotoproduksjon, grafisk design, journalistikk og digital historiefortelling. Uteksaminert med generell studiekompetanse.",
    },
    category: "education",
    period: "August 2016 - June 2019",
    date: "2016-08-01",
    company: "Tiller VGS",
    tags: [],
  },

  {
    id: "jotunheimen-website",
    title: {
      en: "Jotunheimen Esport Website",
      no: "Jotunheimen Esport nettsted",
    },
    description: {
      en: "Modern website for Jotunheimen Esport built with Next.js and Builder.io",
      no: "Moderne nettsted for Jotunheimen Esport bygget med Next.js og Builder.io",
    },
    longDescription: {
      en: "Developed and maintained the official website for Jotunheimen Esport using Next.js and Builder.io. The site features dynamic content management, responsive design, and seamless integration with marketing tools.",
      no: "Utviklet og vedlikeholdt det offisielle nettstedet for Jotunheimen Esport ved hjelp av Next.js og Builder.io. Nettstedet har dynamisk innholdsstyring, responsivt design og sømløs integrering med markedsføringsverktøy.",
    },
    category: "programming",
    date: "2023-06-01",
    tags: ["Next.js", "Builder.io", "React", "Web Development"],
    links: [
      {
        url: "https://jotunheimenesport.no",
        title: {
          en: "Live Website",
          no: "Aktivt nettsted",
        },
        type: "demo",
      },
    ],
    technologies: [
      "Next.js",
      "Builder.io",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    features: [],
  },
  {
    id: "sparesti-system",
    title: {
      en: "Sparesti - Microservice saving app",
      no: "Sparesti - Mikrotjeneste spareapp",
    },
    description: {
      en: "A comprehensive savings-game app system built with microservice architecture and PSD2 Bank integration, for SysDev2 course.",
      no: "Et omfattende sparespill-appsystem bygget med mikrotjenestearkitektur og PSD2-bankintegrasjon, for SysDev2-kurset.",
    },
    longDescription: {
      en: "Led development of a distributed banking system using Spring Boot microservices with RabbitMQ for event-driven communication. Implemented BankID authentication + PSD2 API with DNB and coordinated a team of 6 developers to deliver 12 interconnected services within a 3-month timeframe.",
      no: "Ledet utviklingen av et distribuert banksystem ved hjelp av Spring Boot-mikrotjenester med RabbitMQ for hendelsesdrevet kommunikasjon. Implementerte BankID-autentisering + PSD2 API med DNB og koordinerte et team på 6 utviklere for å levere 12 sammenkoblede tjenester innen en tidsramme på 3 måneder.",
    },
    category: "programming",
    date: "2024-05-01",
    tags: [
      "Java 17",
      "Spring Boot 3",
      "RabbitMQ",
      "Docker",
      "PostgreSQL",
      "React",
      "TypeScript",
    ],
    technologies: [
      "Java 17",
      "Spring Boot 3",
      "RabbitMQ",
      "Docker",
      "PostgreSQL",
      "React",
      "TypeScript",
    ],
    features: [
      "Event-driven architecture",
      "BankID authentication",
      "PSD2 API integration",
      "API Gateway",
      "Service discovery",
      "Distributed transactions",
    ],
    links: [
      {
        url: "https://github.com/SysDev2024/wiki",
        title: {
          en: "Project Wiki",
          no: "Prosjekt Wiki",
        },
        type: "github",
      },
      {
        url: "https://github.com/SysDev2024/frontend",
        title: {
          en: "Frontend",
          no: "Frontend",
        },
        type: "github",
      },
      {
        url: "https://github.com/SysDev2024/user-service",
        title: {
          en: "User Service",
          no: "Brukertjeneste",
        },
        type: "github",
      },
      {
        url: "https://github.com/SysDev2024/shared-models",
        title: {
          en: "Shared Models",
          no: "Delte modeller",
        },
        type: "github",
      },
      {
        url: "https://github.com/SysDev2024/microservice-template",
        title: {
          en: "Microservice Template",
          no: "Mikrotjeneste mal",
        },
        type: "github",
      },
      {
        url: "https://github.com/SysDev2024/goal-service",
        title: {
          en: "Goal Service",
          no: "Måltjeneste",
        },
        type: "github",
      },
      {
        url: "https://github.com/SysDev2024/eureka-discovery",
        title: {
          en: "Eureka Discovery",
          no: "Eureka oppdagelse",
        },
        type: "github",
      },
      {
        url: "https://github.com/SysDev2024/docker-compose-run-everything",
        title: {
          en: "Docker Compose Setup",
          no: "Docker Compose oppsett",
        },
        type: "github",
      },
      {
        url: "https://github.com/SysDev2024/common-amqp",
        title: {
          en: "Common AMQP Library",
          no: "Felles AMQP bibliotek",
        },
        type: "github",
      },
      {
        url: "https://github.com/SysDev2024/challenge-service",
        title: {
          en: "Challenge Service",
          no: "Utfordringstjeneste",
        },
        type: "github",
      },
      {
        url: "https://github.com/SysDev2024/bank-service",
        title: {
          en: "Bank Service",
          no: "Banktjeneste",
        },
        type: "github",
      },
      {
        url: "https://github.com/SysDev2024/auth-service",
        title: {
          en: "Auth Service",
          no: "Autentiseringstjeneste",
        },
        type: "github",
      },
      {
        url: "https://github.com/SysDev2024/api-gateway",
        title: {
          en: "API Gateway",
          no: "API Gateway",
        },
        type: "github",
      },
    ],
  },
  {
    id: "meta-power-quad",
    title: {
      en: "Meta Power Quad - Sensor Data Handler",
      no: "Meta Power Quad - Sensordatahåndterer",
    },
    description: {
      en: "Prototype system for Kongsberg Maritime exploring flexible sensor data handling architecture.",
      no: "Prototypesystem for Kongsberg Maritime som utforsker fleksibel sensordata-håndteringsarkitektur.",
    },
    longDescription: {
      en: "Developed a prototype demonstrating technical solutions for Kongsberg Maritime's Meta Power Quad data handler. Implemented a flexible architecture allowing new sensor integration without code modifications or recompilation. Features include fail-safe mechanisms like data dumping and null-data compression, serving as a foundation for future production system decisions.",
      no: "Utviklet en prototype som demonstrerer tekniske løsninger for Kongsberg Maritimes Meta Power Quad datahåndterer. Implementerte en fleksibel arkitektur som tillater integrasjon av nye sensorer uten kodemodifikasjoner eller rekompilering. Funksjoner inkluderer feilsikre mekanismer som datadumping og null-datakomprimering, som fungerer som et grunnlag for fremtidige beslutninger om produksjonssystemer.",
    },
    category: "programming",
    date: "2024-04-15",
    tags: ["C", "Modbus", "socket programming", "MQTT"],
    technologies: ["C", "socket programming", "Modbus", "MQTT", "Thread Pool"],
    links: [
      {
        url: "https://github.com/magnus411/Fordypningsprosjekt-Kongsberg-Maritime",
        title: {
          en: "GitHub Repository",
          no: "GitHub-repositorium",
        },
        type: "github",
      },
    ],
    features: [
      "Dynamic sensor integration",
      "Data compression algorithms",
      "Fail-safe data dumping",
    ],
  },
  {
    id: "live-display-x",
    title: {
      en: "LiveDisplayX - Digital Signage System",
      no: "LiveDisplayX - Digital skjermsystem",
    },
    description: {
      en: "Dynamic content management system for esports center displays.",
      no: "Dynamisk innholdsstyringssystem for e-sportssenter skjermer.",
    },
    longDescription: {
      en: "Developed a comprehensive digital signage solution enabling dynamic updates of TV displays throughout our esports center. The system shows events, Twitch streams, menus, and promotional content. Features include role-based access control, scheduling, and emergency message broadcasting capabilities.",
      no: "Utviklet en omfattende digital skiltløsning som muliggjør dynamiske oppdateringer av TV-skjermer i hele e-sportssenteret vårt. Systemet viser arrangementer, Twitch-strømmer, menyer og promoteringsinnhold. Funksjoner inkluderer rollebasert tilgangskontroll, planlegging og kringkastingsmuligheter for nødmeldinger.",
    },
    category: "programming",
    date: "2023-05-01",
    tags: ["Next.js", "Firebase Realtime Database", "Clerk Auth"],
    technologies: [
      "Next.js",
      "Firebase Realtime Database",
      "Clerk Auth",
      "Tailwind CSS",
      "postgres",
    ],
    links: [
      {
        url: "https://gitfront.io/r/user-2631487/wJ56L5cDXbt8/LiveDisplayX/",
        title: {
          en: "Project Repository",
          no: "Prosjektrepository",
        },
        type: "github",
      },
    ],
    features: [
      "Dynamic content scheduling",
      "Twitch stream integration",
      "Role-based access control",
    ],
  },
  {
    id: "jotun-monitoring",
    title: {
      en: "Esports Center Monitoring System",
      no: "E-sportssenter overvåkningssystem",
    },
    description: {
      en: "Public network monitoring dashboard for esports center infrastructure.",
      no: "Offentlig nettverksovervåkningsdashboard for e-sportssenter infrastruktur.",
    },
    longDescription: {
      en: "Designed and implemented a real-time public monitoring system displaying network capacity, server status, and PC availability across our esports center. The solution integrates Prometheus for metrics collection, Grafana for visualization, and custom Python scripts for monitoring individual workstation activity through SNMP.",
      no: "Designet og implementerte et sanntids offentlig overvåkningssystem som viser nettverkskapasitet, serverstatus og PC-tilgjengelighet på tvers av e-sportssenteret vårt. Løsningen integrerer Prometheus for metrikk-innsamling, Grafana for visualisering, og tilpassede Python-skript for overvåking av individuell arbeidsstasjonaktivitet gjennom SNMP.",
    },
    category: "programming",
    date: "2023-08-01",
    tags: ["Prometheus", "Grafana", "SNMP"],
    technologies: ["Prometheus", "Grafana", "SNMP", "Python"],
    links: [
      {
        url: "https://gitfront.io/r/user-2631487/umnkcdZxd98Z/JotunMonitoring/",
        title: {
          en: "Project Repository",
          no: "Prosjektrepository",
        },
        type: "github",
      },
    ],
    features: [
      "Real-time network monitoring",
      "PC activity tracking",
      "Public display dashboard",
      "Alerting system",
    ],
  },
  {
    id: "traffic-ai",
    title: {
      en: "Traffic Light AI Controller",
      no: "Trafikklys AI-kontroller",
    },
    description: {
      en: "Machine learning system for optimizing traffic light coordination.",
      no: "Maskinlæringssystem for optimalisering av trafikklyskoordinering.",
    },
    longDescription: {
      en: "Implemented a PPO reinforcement learning agent to control multiple traffic light intersections in SUMO simulations. The system reduces congestion by enabling lights to communicate and predict traffic patterns.",
      no: "Implementerte en PPO forsterkningslæringsagent for å kontrollere flere trafikklys-kryss i SUMO-simuleringer. Systemet reduserer trafikkorker ved å la lysene kommunisere og forutsi trafikkmønstre.",
    },
    category: "programming",
    date: "2023-10-01",
    tags: ["Python", "RLlib", "SUMO"],
    technologies: ["Python", "RLlib", "SUMO", "RLlib"],
    links: [
      {
        url: "https://github.com/magnus411/traffic",
        title: {
          en: "Source Code",
          no: "Kildekode",
        },
        type: "github",
      },
    ],
    features: [
      "Multi-intersection coordination",
      "Traffic prediction",
      "PPO reinforcement learning",
      "SUMO simulation integration",
    ],
  },
  {
    id: "apartment-hunter",
    title: {
      en: "Apartment Hunting Website",
      no: "Leilighetsjakt nettsted",
    },
    description: {
      en: "Next.js application for apartment hunting in Trondheim.",
      no: "Next.js-applikasjon for leilighetsjakt i Trondheim.",
    },
    longDescription: {
      en: "Developed a website about what me and my girlfriend was looking for in an apartment, and shared it arount to potential lenders. Much more fun then sending them a boring message. This way they get to know us better. It was a huge success and we got lots of offers. We setted on an apartment that would have been way over our budget, but with the help of this website we got it for a reasonable price.",
      no: "Utviklet en nettside om hva jeg og kjæresten min så etter i en leilighet, og delte den med potensielle utleiere. Mye morsommere enn å sende dem en kjedelig melding. På denne måten ble de bedre kjent med oss. Det var en stor suksess og vi fikk mange tilbud. Vi bestemte oss for en leilighet som ville ha vært langt over budsjettet vårt, men med hjelp av denne nettsiden fikk vi den til en rimelig pris.",
    },
    category: "programming",
    date: "2024-02-01",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    links: [
      {
        url: "https://github.com/magnus411/Soker-leilighet",
        title: {
          en: "Source Code",
          no: "Kildekode",
        },
        type: "github",
      },
      {
        url: "https://www.mmsokerleilighet.info/",
        title: {
          en: "Live Demo",
          no: "Live demo",
        },
        type: "demo",
      },
    ],
    features: [
      "Responsive property listings",
      "Advanced search filters",
      "Contact management system",
      "Admin dashboard",
    ],
  },
  {
    id: "budget-planner",
    title: {
      en: "Budget Planner Application",
      no: "Budsjettplanlegger applikasjon",
    },
    description: {
      en: "Full-stack budgeting application, in collaboration with BN Bank.",
      no: "Fullstack budsjettapplikasjon, i samarbeid med BN Bank.",
    },
    longDescription: {
      en: "Developed for the SysDev1 course in collaboration with BN Bank, this application offers budget planning, expense categorization, and financial analytics. It features a Spring Boot backend.",
      no: "Utviklet for SysDev1-kurset i samarbeid med BN Bank, tilbyr denne applikasjonen budsjettplanlegging, utgiftskategorisering og finansanalyse. Den har en Spring Boot-backend.",
    },
    category: "programming",
    date: "2023-11-01",
    tags: ["Java", "Spring Boot", "Fullstack"],
    technologies: ["Java", "Spring Boot", "MySQL"],
    links: [
      {
        url: "https://github.com/magnus411/Budgetplan",
        title: {
          en: "Repository",
          no: "Repository",
        },
        type: "github",
      },
    ],
  },
  {
    id: "path-game",
    title: {
      en: "Modular Path Construction Game",
      no: "Modulært banekonstruksjonsspill",
    },
    description: {
      en: "Java game featuring dynamic path building mechanics.",
      no: "Java-spill med dynamiske banebygningsmekanikker.",
    },
    longDescription: {
      en: "A puzzle game where players construct paths by connecting modular components. Developed with JavaFX featuring level editor and progressive difficulty system.",
      no: "Et puslespill hvor spillere konstruerer baner ved å koble sammen modulære komponenter. Utviklet med JavaFX, med nivåredigering og progressivt vanskelighetsgrad-system.",
    },
    category: "programming",
    date: "2023-09-01",
    tags: ["Java", "JavaFX"],
    technologies: ["Java 17", "JavaFX"],
    links: [
      {
        url: "https://github.com/magnus411/Path-Game",
        title: {
          en: "Repository",
          no: "Repository",
        },
        type: "github",
      },
    ],
  },

  // Updated Existing Projects
  {
    id: "portfolio-website",
    title: {
      en: "Portfolio Website v2",
      no: "Portefølje nettsted v2",
    },
    description: {
      en: "Portfolio website showcasing projects.",
      no: "Porteføljenettsted som viser frem prosjekter.",
    },
    longDescription: {
      en: "Portfolio website showcasing projects.",
      no: "Porteføljenettsted som viser frem prosjekter.",
    },
    category: "programming",
    date: "2024-04-01",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    technologies: [
      "Next.js 14",
      "TypeScript 5",
      "Tailwind CSS",
      "Framer Motion",
    ],
    links: [
      {
        url: "https://github.com/magnus411/portfolio",
        title: {
          en: "Repository",
          no: "Repository",
        },
        type: "github",
      },
    ],
  },
  // Work Experience (updated)
  {
    id: "bookibud-developer",
    title: {
      en: "System Developer at Bookibud",
      no: "Systemutvikler hos Bookibud",
    },
    description: {
      en: "Developing scalable booking systems for sports facilities.",
      no: "Utvikler skalerbare bookingsystemer for idrettsanlegg.",
    },
    longDescription: {
      en: "Implementing microservice architecture for a nationwide sports facility booking platform. Responsibilities include API design, database optimization, and CI/CD pipeline configuration.",
      no: "Implementerer mikrotjenestearkitektur for en landsdekkende bookingplattform for idrettsanlegg. Ansvarsområder inkluderer API-design, databaseoptimalisering og CI/CD-pipeline konfigurasjon.",
    },
    category: "work",
    period: "June 2024 - Present",
    date: "2024-06-25",
  },

  // Education (updated)
  {
    id: "traffic-ai",
    title: {
      en: "Traffic Light AI Controller",
      no: "Trafikklys AI-kontroller",
    },
    description: {
      en: "Machine learning system for optimizing traffic light coordination.",
      no: "Maskinlæringssystem for optimalisering av trafikklyskoordinering.",
    },
    longDescription: {
      en: "Implemented a PPO reinforcement learning agent to control multiple traffic light intersections in SUMO simulations. The system reduces congestion by enabling lights to communicate and predict traffic patterns.",
      no: "Implementerte en PPO forsterkningslæringsagent for å kontrollere flere trafikklys-kryss i SUMO-simuleringer. Systemet reduserer trafikkorker ved å la lysene kommunisere og forutsi trafikkmønstre.",
    },
    category: "programming",
    date: "2023-10-01",
    tags: ["Python", "RLlib", "SUMO"],
    technologies: ["Python", "RLlib", "SUMO", "RLlib"],
    links: [
      {
        url: "https://github.com/magnus411/traffic",
        title: {
          en: "Source Code",
          no: "Kildekode",
        },
        type: "github",
      },
    ],
    features: [
      "Multi-intersection coordination",
      "Traffic prediction",
      "PPO reinforcement learning",
      "SUMO simulation integration",
    ],
  },
  {
    id: "apartment-hunter",
    title: {
      en: "Apartment Hunting Website",
      no: "Leilighetsjakt nettsted",
    },
    description: {
      en: "Next.js application for apartment hunting in Trondheim.",
      no: "Next.js-applikasjon for leilighetsjakt i Trondheim.",
    },
    longDescription: {
      en: "Developed a website about what me and my girlfriend was looking for in an apartment, and shared it arount to potential lenders. Much more fun then sending them a boring message. This way they get to know us better. It was a huge success and we got lots of offers. We setted on an apartment that would have been way over our budget, but with the help of this website we got it for a reasonable price.",
      no: "Utviklet en nettside om hva jeg og kjæresten min så etter i en leilighet, og delte den med potensielle utleiere. Mye morsommere enn å sende dem en kjedelig melding. På denne måten ble de bedre kjent med oss. Det var en stor suksess og vi fikk mange tilbud. Vi bestemte oss for en leilighet som ville ha vært langt over budsjettet vårt, men med hjelp av denne nettsiden fikk vi den til en rimelig pris.",
    },
    category: "programming",
    date: "2024-02-01",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    links: [
      {
        url: "https://github.com/magnus411/Soker-leilighet",
        title: {
          en: "Source Code",
          no: "Kildekode",
        },
        type: "github",
      },
      {
        url: "https://www.mmsokerleilighet.info/",
        title: {
          en: "Live Demo",
          no: "Live demo",
        },
        type: "demo",
      },
    ],
    features: [
      "Responsive property listings",
      "Advanced search filters",
      "Contact management system",
      "Admin dashboard",
    ],
  },
  {
    id: "budget-planner",
    title: {
      en: "Budget Planner Application",
      no: "Budsjettplanlegger applikasjon",
    },
    description: {
      en: "Full-stack budgeting application, in collaboration with BN Bank.",
      no: "Fullstack budsjettapplikasjon, i samarbeid med BN Bank.",
    },
    longDescription: {
      en: "Developed for the SysDev1 course in collaboration with BN Bank, this application offers budget planning, expense categorization, and financial analytics. It features a Spring Boot backend.",
      no: "Utviklet for SysDev1-kurset i samarbeid med BN Bank, tilbyr denne applikasjonen budsjettplanlegging, utgiftskategorisering og finansanalyse. Den har en Spring Boot-backend.",
    },
    category: "programming",
    date: "2023-11-01",
    tags: ["Java", "Spring Boot", "Fullstack"],
    technologies: ["Java", "Spring Boot", "MySQL"],
    links: [
      {
        url: "https://github.com/magnus411/Budgetplan",
        title: {
          en: "Repository",
          no: "Repository",
        },
        type: "github",
      },
    ],
  },

  {
    id: "path-game",
    title: {
      en: "Modular Path Construction Game",
      no: "Modulært banekonstruksjonsspill",
    },
    description: {
      en: "Java game featuring dynamic path building mechanics.",
      no: "Java-spill med dynamiske banebygningsmekanikker.",
    },
    longDescription: {
      en: "A puzzle game where players construct paths by connecting modular components. Developed with JavaFX featuring level editor and progressive difficulty system.",
      no: "Et puslespill hvor spillere konstruerer baner ved å koble sammen modulære komponenter. Utviklet med JavaFX, med nivåredigering og progressivt vanskelighetsgrad-system.",
    },
    category: "programming",
    date: "2023-09-01",
    tags: ["Java", "JavaFX"],
    technologies: ["Java 17", "JavaFX"],
    links: [
      {
        url: "https://github.com/magnus411/Path-Game",
        title: {
          en: "Repository",
          no: "Repository",
        },
        type: "github",
      },
    ],
  },

  // Updated Existing Projects
  {
    id: "portfolio-website",
    title: {
      en: "Portfolio Website v2",
      no: "Portefølje nettsted v2",
    },
    description: {
      en: "Portfolio website showcasing projects.",
      no: "Porteføljenettsted som viser frem prosjekter.",
    },
    longDescription: {
      en: "Portfolio website showcasing projects.",
      no: "Porteføljenettsted som viser frem prosjekter.",
    },
    category: "programming",
    date: "2024-04-01",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    technologies: [
      "Next.js 14",
      "TypeScript 5",
      "Tailwind CSS",
      "Framer Motion",
    ],
    links: [
      {
        url: "https://github.com/magnus411/portfolio",
        title: {
          en: "Repository",
          no: "Repository",
        },
        type: "github",
      },
    ],
  },

  // Work Experience (updated)
  {
    id: "bookibud-developer",
    title: {
      en: "System Developer at Bookibud",
      no: "Systemutvikler hos Bookibud",
    },
    description: {
      en: "Developing scalable booking systems for sports facilities.",
      no: "Utvikler skalerbare bookingsystemer for idrettsanlegg.",
    },
    longDescription: {
      en: "Implementing microservice architecture for a nationwide sports facility booking platform. Responsibilities include API design, database optimization, and CI/CD pipeline configuration.",
      no: "Implementerer mikrotjenestearkitektur for en landsdekkende bookingplattform for idrettsanlegg. Ansvarsområder inkluderer API-design, databaseoptimalisering og CI/CD-pipeline konfigurasjon.",
    },
    category: "work",
    period: "June 2024 - Present",
    date: "2024-06-25",
  },

  // Education (updated)
  {
    id: "dynamic-scoreboard",
    title: {
      en: "Dynamic Scoreboard Retropie",
      no: "Dynamisk poengtavle for Retropie",
    },
    description: {
      en: "Full-stack application enabling score tracking via QR code scanning for Retropie games.",
      no: "Fullstack-applikasjon som muliggjør poengsporing via QR-kodeskanning for Retropie-spill.",
    },
    longDescription: {
      en: "Developed a backend API and website that allows players to save their Retropie game scores by scanning a QR code and entering their name. Scores are dynamically updated and displayed on a physical scoreboard in the facility.",
      no: "Utviklet en backend-API og nettside som lar spillere lagre sine Retropie-spillpoeng ved å skanne en QR-kode og oppgi navnet sitt. Poengene oppdateres dynamisk og vises på en fysisk poengtavle i anlegget.",
    },
    category: "programming",
    date: "2023-01-15",
    tags: ["Python", "Flask", "Next.js", "Full Stack"],
    links: [
      {
        url: "https://github.com/magnus411/Dynamic-Scoreboard-Retropie/",
        title: {
          en: "Project Repository",
          no: "Prosjektrepository",
        },
        type: "github",
      },
    ],
    technologies: ["Python", "Flask", "Next.js"],
  },

  {
    id: "lego-pricing-analysis",
    title: {
      en: "Lego Pricing Statistical Analysis",
      no: "Statistisk analyse av Lego-prising",
    },
    description: {
      en: "Statistical analysis comparing pricing of boys' vs girls' Lego sets.",
      no: "Statistisk analyse som sammenligner prising av gutte- vs jente-Legoesker.",
    },
    longDescription: {
      en: "Conducted a comprehensive statistical analysis investigating price differences between boys' and girls' Lego sets. Developed Python scripts for data collection, cleaning, and analysis, employing hypothesis testing and visualization techniques to draw meaningful conclusions about gender-based pricing disparities in toys.",
      no: "Gjennomførte en omfattende statistisk analyse som undersøkte prisforskjeller mellom gutte- og jente-Legoesker. Utviklet Python-skript for datainnsamling, -rensing og -analyse, med bruk av hypotesetesting og visualiseringsteknikker for å trekke meningsfulle konklusjoner om kjønnsbaserte prisforskjeller i leker.",
    },
    category: "programming",
    date: "2023-11-01",
    tags: ["Python", "Pandas", "Matplotlib"],
    technologies: ["Python", "Pandas", "Matplotlib", "Scipy"],
    links: [
      {
        url: "https://github.com/magnus411/StatistikkProsjekt",
        title: {
          en: "GitHub Repository",
          no: "GitHub-repository",
        },
        type: "github",
      },
    ],
  },
  // Design Projects
  {
    id: "rome-3d",
    title: {
      en: "Rome 3D Visualization",
      no: "Roma 3D-visualisering",
    },
    description: {
      en: "Detailed 3D visualization of ancient Roman architecture and urban planning.",
      no: "Detaljert 3D-visualisering av antikk romersk arkitektur og byplanlegging.",
    },
    image: "https://i.imgur.com/JiF1rPJ.jpeg",
    category: "design",
    date: "2023-05-01",
    tags: ["3D Modeling", "Blender"],
  },
  {
    id: "jotunheimen-3d",
    title: {
      en: "Jotunheimen Esport 3D Design",
      no: "Jotunheimen Esport 3D-design",
    },
    description: {
      en: "Comprehensive 3D visualization of Jotunheimen EsportCenter.",
      no: "Omfattende 3D-visualisering av Jotunheimen E-sportssenter.",
    },
    longDescription: {
      en: "Created detailed 3D visualizations of Jotunheimen EsportCenter using Blender. This project was instrumental in the planning phase, allowing stakeholders to visualize the final result and make informed decisions about the layout and design.",
      no: "Laget detaljerte 3D-visualiseringer av Jotunheimen E-sportssenter ved hjelp av Blender. Dette prosjektet var avgjørende i planleggingsfasen, og ga interessenter muligheten til å visualisere det endelige resultatet og ta informerte beslutninger om layout og design.",
    },
    image: "https://i.imgur.com/oRtEoPe.png",
    category: "design",
    date: "2023-02-01",
    tags: [
      "Blender",
      "3D Modeling",
      "Interior Design",
      "Architectural Visualization",
    ],
    technologies: ["Blender", "3D Modeling", "Lighting", "Texturing"],
    features: [
      "Detailed interior visualization",
      "Gaming setup layouts",
      "Communal areas design",
      "Lighting studies",
    ],
    links: [
      {
        url: "https://i.imgur.com/cCr5sjV.png",
        title: {
          en: "Additional View 1",
          no: "Ekstra visning 1",
        },
        type: "demo",
      },
      {
        url: "https://i.imgur.com/Dv7OQEs.png",
        title: {
          en: "Additional View 2",
          no: "Ekstra visning 2",
        },
        type: "demo",
      },
    ],
  },
  {
    id: "astronaut-3d",
    title: {
      en: "Astronaut 3D School Project",
      no: "Astronaut 3D skoleprosjekt",
    },
    description: {
      en: "Detailed 3D modeling project featuring an astronaut character design.",
      no: "Detaljert 3D-modelleringsprosjekt med en astronaut-karakterdesign.",
    },
    image: "https://i.imgur.com/bwHN1ux.jpg",
    category: "design",
    date: "2022-11-01",
    tags: ["3D Modeling", "Character Design", "Blender"],
    links: [
      {
        url: "https://imgur.com/nxeYeVS",
        title: {
          en: "Additional View",
          no: "Ekstra visning",
        },
        type: "demo",
      },
    ],
  },
];
