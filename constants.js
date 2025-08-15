export const METADATA = {

  author: "Nikesh S",
  title: "Portfolio | Nikesh S",
  description:
    "Nikesh S is a passionate Cybersecurity and Full Stack Developer, dedicated to building secure, scalable, and user-friendly web applications.",
  siteUrl: "https://your-portfolio-link.com",
  twitterHandle: "", // or leave empty if none
  keywords: [
    "Nikesh S",
    "Cybersecurity",
    "Full Stack Developer",
    "React Developer",
    "MERN Stack",
    "Portfolio",
    "Web Developer"
  ].join(", "),
 
  language: "English",
  themeColor: "#000000",
};


export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name:"About Me",
    ref:"about"
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
"A Cybersecurity-Minded Full Stack Developer", "I Build Secure, Modern, and Scalable Web Apps", "Turning Code into User-Friendly Experiences", "Blending Cybersecurity with Creative Development", "I Craft Web Solutions That Are Fast and Safe", "Security Meets Innovation in My Code"
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:nikeshsivasubramanian1411@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/nikesh-s-5a495328b/",
  },
  {
    name: "github",
    url: "https://github.com/NikeshSivasubramanian-1411",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/_nikesh_sivasamy_/?next=%2F",
  },
];


export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "python",
    "powershell",
    "java",
    "figma",
    "canva",
    "photoshop"
  ],
  librariesAndFrameworks: [
    "react",
    "nextjs",
    "nodejs",
    "tailwindcss",
  
  ],
  databases: ["mysql", "mongodb"],
  cybersecurityTools: [
    "nmap",
    "wireshark",
    "burpsuite"
  ],
  other: [
    "git",
    "github",
    
  ]
};


export const PROJECTS = [
  // {
  //   name: "React Native Directory",
  //   image: "/projects/react-native-directory.webp",
  //   blurImage: "/projects/blur/react-native-directory.webp",
  //   description:
  //     "Quickly search and filter React Native libraries from Raycast 🔌",
  //   gradient: ["#F14658", "#DC2537"],
  //  
  //   tech: ["typescript", "react", "raycast"],
  // },
  {
    name: "shopsy",
    image: "/projects/shopsy.png",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Shopsy an ecommerce website using React.js",
    gradient: ["#F14658", "#DC2537"],
    
    tech: ["react", "tailwindcss"],
  },
  {
    name: "Web_App_Vulnerability_Scanner",
    image: "/projects/webappvuln.png",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "A vulnerability scanner using python by using socket.io and request libraries",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/NikeshSivasubramanian-1411/Web_App_Vul_Scanner",
    tech: ["react"],
  },
  {
    name: "Weather-App",
    image: "/projects/weatherapp.png",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Realtime weather using Open Weather API",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://nikeshsivasubramanian-1411.github.io/Weather_app/",
    tech: ["javascript", "html", "css", "openweathermapapi"],
  },
  {
    name: "Random Password Generator",
    image: "/projects/Randompass.png",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "Random Strong password generator",
    gradient: ["#000066", "#6699FF"],
    url: "https://github.com/NikeshSivasubramanian-1411/Random-Password-Generator-using-Html-Css-Js",
    tech: ["html", "css", "js"],
  },
  
];

export const WORK_CONTENTS = {
  SITER: [
    {
      title: "SITER Academy",
      description:
        "SITER Academy (Norway) is a global learning and development platform focused on real-world software projects. As a Full Stack Developer Intern, I collaborated with an international team to build scalable and responsive applications, gaining valuable experience in frontend and backend technologies.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Global Collaboration. Real Projects.
        </div>
      ),
    },
    {
      title: "Building",
      description:
        "I contributed to developing responsive web interfaces using HTML, CSS, JavaScript, and React, while integrating RESTful APIs with backend systems powered by Node.js and MongoDB. This role enhanced my ability to deliver modern, user-focused web applications.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Full Stack Developer Intern
        </div>
      ),
    },
    {
      title: "Securing",
      description:
        "In addition to development, I applied cybersecurity best practices to ensure secure coding and robust API integrations. I implemented version control using Git and followed agile workflows, improving both code quality and delivery speed.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Secure. Scalable. User-Friendly.
        </div>
      ),
    },
  ],



  DUKAAN: [
    {
      title: "Dukaan",
      description:
        "Dukaan is a platform that enables businesses to launch their online stores at ease.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Revolutionizing commerce, one click at a time
        </div>
      ),
    },
    {
      title: "Transformation",
      description:
        "Since 2023, the Dukaan Seller Dashboard struggled with technical issues and a broken user experience due to accumulated technical debt. Leading a team of two junior developers, we migrated the dashboard from CSR to SSR, redesigned the UI, and overhauled the codebase in the process. This resolved the technical debt and vastly improved the user experience, making it Dukaan's largest and most impactful migration.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Senior Frontend Engineer
        </div>
      ),
    },
    {
      title: "Evolution",
      description:
        "Recognizing the need for improved performance and user engagement, I spearheaded the migration of the Dukaan App from native to React-Native for iOS and Android platforms. This strategic move led to a X% enhancement in app performance and a Y% boost in user engagement, representing a significant milestone in the app's evolution.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer
        </div>
      ),
    },
    {
      title: "Optimization",
      description:
        "Leveraging user feedback and analytics, I improved the seller web dashboard design, reducing bounce rates. Simultaneously, I overhauled the build process, slashing bundle size and boosting overall performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer Intern
        </div>
      ),
    },
  ],
  // AVIATE: [
  //   {
  //     title: "Aviate",
  //     description:
  //       "Aviate is a preparation and mentorship platform for job-seekers that are seeking non-technical roles across top companies",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Finding the right job isn&apos;t fate, it&apos;s navigation
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Innovation",
  //     description:
  //       "I spearheaded the development of Q-Rate, their flagship product, a voice-based applicant screening platform. Moreover, I took initiatives to enhance user engagement and drive substantial increases in daily traffic. Additionally, I implemented an error-logging and bug reporting system, significantly diminishing user-reported bugs.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Frontend Developer Intern
  //       </div>
  //     ),
  //   },
  // ],
  // SPACENOS: [
  //   {
  //     title: "Spacenos",
  //     description:
  //       "A dynamic startup dedicated to creating innovative products that make the world a better place.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         We build apps that solve problems for the next billion people
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Trailblazing",
  //     description:
  //       "I led the comprehensive overhaul of the Admin Portal, implementing CRUD features for all services and providers. Additionally, I architected a feature enabling precise customer location tracking and delivering insightful usage statistics. Through optimized and compressed file serving, I catalyzed a remarkable Yx increase in page speed, resulting in a X% boost in customer retention.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Web Developer Intern
  //       </div>
  //     ),
  //   },
  // ],
};

export const GTAG = "G-5HCTL2TJ5W";
