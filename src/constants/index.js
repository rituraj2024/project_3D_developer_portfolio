import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  codehelp,
  nvidia,
  devdetective,
  chair,
  razorpay,
  aditya,
  nikshipta,
  //nitaphospital,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
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
    title: "Web Designing",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Structure & Algorithmn",
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
    name: "React JS",
    icon: reactjs,
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
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "FULL STACK DEVELOPER USING MERN",
    company_name: "CODEHELP",
    icon: codehelp,
    iconBg: "#383E56",
    date: "March 2023 - SEPT. 2023",
    points: [
      "Proficient in HTML, Tailwind CSS, and JavaScript for building responsive and user-friendly interfaces.",
      "Proficient in HTML, CSS, and JavaScript for building responsive and user-friendly interfaces.",
      "Built robust server-side applications using Node.js and Express.js.",
      "Gained expertise in MongoDB for efficient data storage and retrieval.",
      "Build several projects like NITAP Health Care Website and NITAP Complaint Platform",
    ],
  },
  {
    title: "Data Structures and Algorithms (DSA)",
    company_name: "CODEHELP",
    icon: codehelp,
    iconBg: "#E6DEDD",
    date: "Jan 2023 -  June 2023",
    points: [
      "I completed a comprehensive five-month DSA course from CodeHelp platform, where I learned:",
      "Mastered arrays, linked lists, stacks, queues, trees, heaps, hash tables, and graphs.",
      "Gained proficiency in divide and conquer, dynamic programming, greedy algorithms, and optimization techniques.",
      "Studied graph traversal, shortest path, minimum spanning tree algorithms, and dynamic programming for complex problem-solving.",
      "Participating in coding context on different platform ",
      "Solved more than 500 question on different platform such as Leetcode,Codeforces ,AlgoUniversity and Geeksforgeeks",
    ],
  },
  {
    title: "Fundamentals of Deep Learning",
    company_name: "NVIDIA",
    icon: nvidia,
    iconBg: "#383E56",
    date: "March ,2024",
    points: [
      "I have completed a comprehensive nine-hour course on the Fundamentals of Deep Learning from Nvidia ",
      "Understood the basics of neural networks, including neurons, activation functions, and architectures.",
      "Learned about forward and backward propagation, loss functions, and optimization techniques like gradient descent.",
      "Gained hands-on experience with popular deep learning frameworks such as TensorFlow and PyTorch for building and training neural networks.",
      "Applied deep learning techniques to real-world problems, including image classification, object detection",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      " I know him from last 2 years and as of now I can surely assure that he has critical thinking which is essential for software engineer, highly dedicated towards work, self-discipline and friendly with everyone.",
    name: "Aditya Pratap Singh",
    designation: "Undergraduate",
    company: "NIT ANDHRA PRADESH",
    image: aditya,
  },
  {
    testimonial:
      "He excels in software engineering, with impressive problem-solving skills in DSA and web development, and is a dedicated learner, active participant in coding challenges, and helpful team member.",
    name: "Nikshipta",
    designation: "Undergraduate",
    company: "NIT ANDHRA PRADESH",
    image: nikshipta,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Arun Kumar Singh",
    designation: "SDE 3",
    company: "JP Morgan",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "NITAP COMPAINT ",
    description:
      "A web-based platform designed to streamline the complaint submission and resolution process for over 2500 students and faculty members. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link_github: "https://github.com/rituraj2024/complaintco",
    source_code_link_youtube:
      "https://youtu.be/kPhSBGEvmlc?si=2HU0aY3QJ_JKmLyN",
  },
  {
    name: "NITAP HOSPITALE CARE",
    description:
      "Created a comprehensive healthcare platform for NITAP students and faculty, including appointment scheduling, patient management, and doctor registration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link_github:
      "https://github.com/rituraj2024/Nitaphealthcaresystem",
    source_code_link_youtube:
      "https://youtu.be/CEoYfkgtqKc?si=bEN5p2aF836bI_d0",
  },
  {
    name: "Raj DevDetective Expert",
    description:
      "Developed DevDetective, a project using the API to search for user accounts. It features both dark and light mode functionality, providing an enhanced user experience.    ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
    ],
    image: devdetective,
    source_code_link_github:
      "https://github.com/rituraj2024/Dev-Detective-Project.git",
    source_code_link_youtube: "https://riturajdevdetective.netlify.app/",
  },
  {
    name: "COLOURED CHAIR ",
    description:
      "This project i have made to show case my frontend skill. On clicking on different different colours , the colour of the chair will get change. Try it once, its an Amazing one. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "frontend",
        color: "pink-text-gradient",
      },
      {
        name: "project",
        color: "blue-text-gradient",
      },
    ],
    image: chair,
    source_code_link_github:
      "https://github.com/rituraj2024/my_modern_chair.git",
    source_code_link_youtube: "https://rituraj-my-modern-chair.netlify.app/",
  },
  {
    name: "RAZORPAY  WEBSITE",
    description:
      "This project i have made to show case my frontend skill. On clicking on different different colours , the colour of the chair will get change. Try it once, its an Amazing one. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: razorpay,
    source_code_link_github: "https://github.com/rituraj2024/razorpayClone2",
    source_code_link_youtube: "https://demorazorpayclone.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
