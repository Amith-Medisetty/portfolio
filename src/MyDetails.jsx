//Used accross multiple Screens

export const MyName = "Amith Medisetty";
export const MyRole = "Full-Stack Developer";

// Header.jsx
export const navItems = [
  { label: "Home", path: "#home" },
  { label: "About", path: "#about" },
  { label: "Profile", path: "#profile" },
  { label: "Projects", path: "#projects" },
  { label: "Contact", path: "#contact" },
];

// Introduction.jsx
export const IntroProfessionalDetails = [
  {
    text: "Linked-In",
    href: "https://www.linkedin.com/in/amith-medisetty-3479192b1/",
  },
  {
    text: "Download CV",
    href: "Resume.pdf",
  },
];

export const IntroDesc =
  "I am a passionate and dedicated 3rd-year Computer Science and Engineering (AIML) student pursuing my BE degree. I have a strong enthusiasm for technology and a relentless curiosity that drives me to explore the ever-evolving world of computer science and artificial intelligence. During my academic journey, I've gained a solid foundation in programming, algorithms, and software development, and I'm excited to apply this knowledge to real-world challenges. I thrive on problem-solving and love to create innovative solutions. Welcome to my portfolio, where you can explore my projects, experiences, and insights into my journey as a Computer Science student";

// About.jsx
export const AboutDesc =
"I am a software professional well-versed in the MERN stack, enabling me to build robust and scalable web applications efficiently. My expertise in full-stack development allows me to deliver end-to-end solutions with a focus on functionality and user experience.I also have a strong background in Computer Science and Engineering, specializing in Artificial Intelligence. With a solid foundation in machine learning algorithms and deep learning algorithms, I am actively exploring deep learning frameworks such as PyTorch, TensorFlow, and Keras to expand my expertise and drive innovation in solving real-world challenges.I thrive on collaboration and innovation. Let’s connect to create impactful solutions together."
//Profile.jsx
export const ProfileContentBoxDescSize = 50;

export const ProfileDetails = [
  {
    category: "Education",
    icon: "SchoolIcon",
    timelines: [
      {
        title: "UnderGraduation",
        org: "Neil Gogte Institute of Technology",
        startYear: "2022",
        endYear: "2026",
        desc: "Currently pursuing my BE degree in Computer Science and Engineering specializing in Artificial Intelligence and Machine Learning.",
      },
      {
        title: "Intemediate",
        org: "Narayana Junior College",
        startYear: "2020",
        endYear: "2022",
        desc: "Completed the Intermediate Examination from Narayana Junior College, Hyderabad, India in 2022.",
      },
      {
        title: "Secondary School",
        org: "Sri Chaitanya Schools",
        startYear: "",
        endYear: "2020",
        desc: "Completed the Secondary School Examination at Sri Chaitanya Schools, Hyderabad, in 2020.",
      },
    ],
  },
  // {
  //   category: "Experience",
  //   icon: "WorkHistoryIcon",
  //   timelines: [
  //     {
  //       title: "Software Developer",
  //       org: "Amadeus Software Labs",
  //       startYear: "Nov 2021",
  //       endYear: "Dec 2022 (1 yr 2 mos)",
  //       desc: "Worked as a full-stack developer in the Airlines Checking In department, specifically in the IATCI (Interline Airline Through Check-in) department. Worked on bug fixes in the code, developed a tool related to airlines feeds, and took care of the entire process from bug fix to delivery to the client. This experience gave me valuable exposure to real-world applications.",
  //     },
  //     {
  //       title: "Application Developer Intern",
  //       org: "Revature",
  //       startYear: "Jul 2021",
  //       endYear: "Oct 2021 (4 mos)",
  //       desc: "As an Application Developer Intern at Revature, I developed a robust management system using Spring Boot and React. My role involved backend API development, creating a user-friendly interface, and implementing security measures, all aimed at enhancing operational efficiency",
  //     },
  //   ],
  // },
  {
    category: "Skills",
    icon: "DisplaySettingsIcon",
    timelines: [
      {
        title: "Languages",
        desc: "Java, Python, C, HTML, CSS, JavaScript, SQL",
      },
      {
        title: "Frameworks & Libraries",
        desc: "Node JS, Express JS, React JS, PyTorch, TensorFlow, Keras, NumPy, Pandas",
      },
      {
        title: "Data Handling",
        desc: "SQL, NoSQL (MongoDB)",
      },
      {
        title: "Machine Learning (ML) and Deep Learning (DL) algorithms",
        desc: "Supervised Learning, Unsupervised Learning, Natural Language Processing, Deep Learning (ANN, CNN, RNN, LSTM)",
      },
    ],
  },
];

// Project.jsx
export const ProjectContentBoxDescSize = 20;

export const projects = [
  {
    title: "Automated Student Counting In Classroom",
    desc: "The Automated Classroom Attendance Counting system is designed to accurately count students in classroom images, leveraging deep learning techniques. The project initially explored basic models like CNN1 and CNN2 before advancing to more sophisticated architectures such as ResNet9. To achieve higher accuracy and robustness, a customized ResNet50 model was developed, featuring additional fully connected layers, dropout regularization, and a dual-branch design. This approach ensures precise attendance counting and scalability, making it suitable for real-time applications in educational and surveillance domains.",
    techStack: ["Convolutional Neural Networks(CNNs)", "ResNet9", "ResNet50", "Deep Learning"],
    url: "https://github.com/Amith-Medisetty/Student-Counting",
  },
  {
    title: "Expense Tracker with Chatbot and Currency Conversion",
    desc: "The Expense Tracker with Chatbot and Currency Converter is a full-stack application designed to manage and analyze financial data efficiently. It integrates a chatbot using Gemini API to provide interactive assistance and personalized financial insights. Additionally, the system features real-time currency exchange rate updates and a currency converter using the Currency Converter API, enhancing usability for global users. Built with the MERN stack, it offers seamless data management, a user-friendly interface, and powerful tools for improved financial decision-making",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB","Gemini API","Currency Coverter API"],
    url: "https://github.com/Amith-Medisetty/Expense-Tracker",
  },
  {
    title: "Sentiment Analysis for Restaurant Reviews ",
    desc: "The Sentiment Analysis for Restaurant Reviews system uses a trained NLP model to classify customer feedback as positive or negative. It leverages the Bag of Words model to represent textual data effectively and employs a Linear Regression model for classification. Designed for ease of use, the system allows restaurant owners to upload PDF reviews for analysis and generates a summary of sentiment percentages, enabling data-driven decisions to improve customer satisfaction.",
    techStack: ["NLP", "Bag Of Words","Linear Regresion","React.js","Python"],
    url: "https://github.com/Amith-Medisetty/Review_Analyzer",
  },
  {
    title: "Exercise Tracker System ",
    desc: "A full-stack application developed using the MERN Stack (MongoDB, Express.js, React.js, Node.js) to help users efficiently manage their workout data. The system enables seamless CRUD operations (Create, Read, Update, Delete) to track exercise details such as exercise name, load, and reps. It features a user-friendly interface for intuitive and efficient tracking of fitness progress and incorporates end-to-end authentication implemented using JWT for secure user login and data management.",
    techStack: ["MERN( MongoDB, Express.js, React.js, Node.js)"],
    url: "https://github.com/Amith-Medisetty/workouts",
  },
  {
    title: "Chef Guru",
    desc: "Chef Guru is an AI-powered web application that generates personalized recipes based on user-provided ingredients using the Gemini API. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), it features end-to-end authentication with JWT for secure access. The platform stands out with its sleek, responsive, and highly intuitive user interface, ensuring a seamless user experience. Chef Guru combines advanced AI integration with a visually stunning design to deliver a perfect blend of functionality and aesthetic appeal.",
    techStack: ["MERN( MongoDB, Express.js, React.js, Node.js)", "Gemini API"],
    url: "https://github.com/Amith-Medisetty/ChefGuru",
  },
];

// contact.jsx

export const myEmail = "amithmedisetty@gmail.com";
export const phone = "+91 83093 95326";
