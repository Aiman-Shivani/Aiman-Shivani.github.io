import {
  mobile,
  backend,
  creator,
  web,
  graphql,
  java,
  tensorflow,
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
  bits_pilani,
  vit_logo,
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
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
    icon: bits_pilani,
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
    icon: vit_logo,
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
      "Aiman has been a quick learner and a valuable asset to the team. He has worked on various complex frameworks and problems with me, and I recommend him for his persistent and determined approach towards solving problems, his attitude of developing in the RIGHT way rather than resorting to shortcuts or workarounds, and his good design thinking, which is ahead of his years of experience.",
    name: "Anupama Roy",
    designation: "Tech Lead",
    company: "Google",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "He quickly grasped and developed a strong foundation in Trade Technology, where his contributions to designing efficient and reliable financial frameworks have been invaluable. He is an excellent team player, often taking the lead in planning and strategy meetings. Aiman not only applies his knowledge effectively but also takes the initiative to document his work thoroughly. He is proactive in sharing insights and consistently supports the team in various ways",
    name: "Jubin Jayprakash",
    designation: "Tech Lead",
    company: "JP Morgan Chase",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Over nearly three years, I’ve seen Aiman grow as both a research-driven individual and a leader in his undergrad. He delivered the Karaka Framework, resulting in a 2023 ACL Conference publication. Leading a forum of 50 students, Aiman shared his research knowledge, conducting lectures and overseeing more than 5 project sessions, inspiring his peers.",
    name: "Devika Verma",
    designation: "Assistant Professor (PhD)",
    company: "Pune University [ Vishwakarma Institute of Technology ]",
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
