import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  jpmc_logo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Machine Learning Research",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "System Design Planning",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer - SWE",
    company_name: "JP Morgan Chase",
    icon: jpmc_logo,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Played a pivotal role in re-engineering the intricate trade technology platform including multiple payment procedures and SWIFT flows",
      "Implemented Module Federation Micro-frontend’s in React and Spring Boot Micro-services for development of the application",
      "Led the planning and implementation of system architectures and designs for different parts of application from scratch, thereby increasing efficiency and reducing downtime of the application by 27%",
      "Contributed to core financial frameworks utilized across the Trade Finance Domain, improving developer efficiencyand reducing development time by 15%.",
      "Designed proprietary data storage and cache management solutions, resulting in 12% faster data retrieval forreference and user data for approximately 120,000 parameters",
      "Worked over multiple technical debts and implemented strategies to minimize future tech debt efforts resulting in9% faster sprint deliveries for 12 EPIC’s",
      "Collaborated with Business Analysts and Operations to implement core trade logic for 4 trade processes within 6months, streamlining workflow",
      "Nationally recognized (top 50) for exceptional performance and timely delivery within strict business constraints",
      "Contributed to the adoption of agile methodologies, utilizing Jira and Confluence, paved the way for improvementof code readability and documentation, improving team productivity through iterative development cycles by 40%",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "NLP Researcher",
    company_name: "BITS Pilani, Goa Campus",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Jan 2023",
    points: [
      "Designed and developed a Karaka Framework to extract karakas from a sentence, under the guidance of Prof Ramprasad Joshi and Assistant Prof. Devika Verma which resulted in publishing research at an ACL Conference :RANLP - 2023",
      "Karakas are a unique linguistic feature for improving performance of downstream Natrual Language Processing - NLP applications like question-answering by 12% for complex and low resource languages which resulted in publishing research at an ACL Conference",
      "Developed dependency based words using Deep Learning to improve scores in downstream NLP applications",
    ],
  },
  {
    title: "Summer Research Intern",
    company_name: "Vishwarkama Institute of Technology",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2020 - Sept 2020",
    points: [
      "Led the development of a concept Feedback ECG and PPG Monitoring Health Wrist Band to detect cardiovascular diseases, which resulted in a copyright registration in India",
      "Developed concept using Arduino Bluno BLE MCU and MAX86150 sensor to perform data collection",
      "Manipulated and refined data before analysis with HeartPy library in Python",
      "Implemented a notification system using Twilio API and Google Cloud Platform for quick response in case of abnormal result",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
