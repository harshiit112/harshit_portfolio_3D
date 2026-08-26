export const myProjects = [
  {
    id: 1,
    title: "Real-Time Workspace Collaboration Platform",
    description:
      "A real-time team communication platform inspired by Slack, built to enhance collaboration with modern messaging and video conferencing features.",
    subDescription: [
      "I developed a Slack-inspired collaboration app with real-time chat and video calling. It uses Clerk for secure authentication with RBAC, a responsive React + Tailwind CSS frontend, and a Node.js/Express backend connected to MongoDB for scalable data storage. The project highlights my skills in authentication, UI design, and real-time communication.",
    ],
    href: "https://alpha-slack-frontend.vercel.app/auth",
    logo: "",
    image: "/assets/projects/Screenshot (47).png",
    tags: [
      {
        id: 1,
        name: "Clerk",
        path: "/assets/logos/idC1jR8p-G_logos.jpeg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/icons8-javascript.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },    
  {
      id: 2,
      title: "Video Calling & Realtime Chatting App",
      description:
        "Facilitates real-time video calling and instant messaging between users, enabling seamless live interactions and chat within the application.",
      subDescription: [
        "Built a scalable web application using React.js for the frontend and Express.js for backend services, integrating real-time communication features for dynamic user engagement",
        // "Implemented secure authentication and robust database management to ensure privacy and data integrity.",
        "Designed a responsive user interface with Tailwind CSS, enhancing user experience across devices",
        // "Added real-time video streaming capabilities using Stream and developed instant chat features, supporting efficient and interactive collaboration.",
      ],
      href: "https://chitchat-idng.onrender.com/login",
      logo: "",
      image: "/assets/projects/Screenshot (42).png",
      tags: [
        {
          id: 1,
          name: "React.js",
          path: "/assets/logos/icons8-react-native.svg",
        },
        {
          id: 2,
          name: "JavaScript",
          path: "/assets/logos/icons8-javascript.svg",
        },
        {
          id: 3,
          name: "Express.js",
          path: "/assets/logos/icons8-express-js.svg",
        },
        {
          id: 4,
          name: "TailwindCSS",
          path: "/assets/logos/tailwindcss.svg",
        },
      ],
    },
    {
      id: 3,
      title: "TerrorGT: Multi-Model AI",
      description:
        "TerrorGT is an agentic AI workspace for asking questions, searching the web, querying uploaded files, remembering useful facts, checking live information, and switching between multiple LLM providers from one interface.",
      subDescription: [
        "Multi-provider chat with Mistral, Groq, and Google Gemini models.",
        "Document RAG for PDF, DOCX, TXT, Markdown, Python, and CSV files.",
      ],
      href: "https://system-agent-01.onrender.com/",
      logo: "",
      image: "/assets/projects/TerrorGT.png",
      tags: [
        {
          id: 1,
          name: "Python",
          path: "/assets/logos/python-svgrepo-com.svg",
        },
        {
          id: 2,
          name: "LangGraph",
          path: "/assets/logos/langgraph_icon.svg",
        },
        {
          id: 3,
          name: "Gemini",
          path: "/assets/logos/gemini_icon.svg",
        },
        {
          id: 4,
          name: "FastAPI",
          path: "/assets/logos/FastAPI.svg",
        },
      ],
    },
    {
      id: 4,
      title: "Agentic TripmMate",
      description:
        "A multi-agent AI travel planner that finds live flight data, researches hotels, and creates a practical day-by-day itinerary from one natural-language request.",
      subDescription: [
        "Agentic TripMate is a FastAPI application powered by LangGraph. It combines external travel data with LLM reasoning to generate a complete travel plan.",
        "Built with: FastAPI, LangGraph, Groq, AviationStack, Tavily, PostgreSQL, Jinja2, HTML, CSS, and JavaScript.",
      ],
      href: "https://agentic-bot-01.onrender.com/",
      logo: "",
      image: "/assets/projects/TripMate.png",
      tags: [
        {
          id: 1,
          name: "Python",
          path: "/assets/logos/python-svgrepo-com.svg",
        },
        {
          id: 2,
          name: "LangGraph",
          path: "/assets/logos/langgraph_icon.svg",
        },
        {
          id: 3,
          name: "Groq",
          path: "/assets/logos/groq_icon.svg",
        },
        {
          id: 4,
          name: "PostgreSQL",
          path: "/assets/logos/postgresql_icon.svg",
        },
      ],
    },
    {
      id: 5,
      title: "PrismAI: Next-Gen Multi-Agent",
      description:
        "PrismAI is a state-of-the-art Multi-Agent Collaborative System that automates deep, high-quality web research and report drafting.",
      subDescription: [
        "Using LangChain and powered by Mistral AI, PrismAI coordinates multiple specialized AI agents that work together in a structured pipeline.",
        "PrismAI features a futuristic, ultra-premium Web Dashboard built on Streamlit, layered with custom WebGL (Three.js) 3D interactive graphics.",
      ],
      href: "https://shorturl.at/XF8jt",
      logo: "",
      image: "/assets/projects/Screenshot (59).png",
      tags: [
        {
          id: 1,
          name: "Python",
          path: "/assets/logos/python-svgrepo-com.svg",
        },
        {
          id: 2,
          name: "Langchain",
          path: "/assets/logos/Langchain--Streamline-Simple-Icons.svg",
        },
        {
          id: 3,
          name: "Mistral-AI",
          path: "/assets/logos/mistral-color.svg",
        },
        {
          id: 4,
          name: "Tavily Search",
          path: "/assets/logos/tavily-logo.svg",
        },
      ],
    },
    {
      id: 6,
      title: "Emotion Engine — Deep Learning NLP Classifier",
      description:
        "An end-to-end Natural Language Processing (NLP) classification system that analyzes textual input to detect emotional state.",
      subDescription: [
        "The engine is trained on a custom Bidirectional GRU (BiGRU) neural network, served using FastAPI's high-speed async endpoints, and presents predictions in a modern, dynamic, mood-reactive web application.",
        "Detailed comparisons between SimpleRNN, LSTM, GRU, and Bidirectional GRU.",
      ],
      href: "https://mood-predict.onrender.com/",
      logo: "",
      image: "/assets/projects/Emotion.png",
      tags: [
        {
          id: 1,
          name: "Python",
          path: "/assets/logos/python-svgrepo-com.svg",
        },
        {
          id: 2,
          name: "TensorFlow",
          path: "/assets/logos/TensorFlow.svg",
        },
        {
          id: 3,
          name: "HuggingFace",
          path: "/assets/logos/HuggingFace.svg",
        },
        {
          id: 4,
          name: "FastAPI",
          path: "/assets/logos/FastAPI.svg",
        },
      ],
    },
  //   {
  //     id: 5,
  //     title: "WordPress Custom Theme",
  //     description:
  //       "A fully customizable WordPress theme optimized for performance and SEO.",
  //     subDescription: [
  //       "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
  //       "Integrated Tailwind CSS for modern styling and UI enhancements.",
  //       "Optimized SEO and page speed using Vite.js for fast builds.",
  //       "Implemented custom widgets and plugin compatibility for extended functionality.",
  //     ],
  //     href: "",
  //     logo: "",
  //     image: "/assets/projects/wordpress-theme.jpg",
  //     tags: [
  //       {
  //         id: 1,
  //         name: "WordPress",
  //         path: "/assets/logos/wordpress.svg",
  //       },
  //       {
  //         id: 2,
  //         name: "HTML5",
  //         path: "/assets/logos/html5.svg",
  //       },
  //       {
  //         id: 3,
  //         name: "CSS3",
  //         path: "/assets/logos/css3.svg",
  //       },
  //       {
  //         id: 4,
  //         name: "Vite.js",
  //         path: "/assets/logos/vitejs.svg",
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     title: "Online Learning Platform",
  //     description:
  //       "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
  //     subDescription: [
  //       "Built using Blazor WebAssembly for a seamless SPA experience.",
  //       "Implemented video streaming with Azure Media Services.",
  //       "Added a quiz system with dynamic question generation and real-time grading.",
  //       "Integrated Stripe API for secure payment processing.",
  //     ],
  //     href: "",
  //     logo: "",
  //     image: "/assets/projects/elearning.jpg",
  //     tags: [
  //       {
  //         id: 1,
  //         name: "Blazor",
  //         path: "/assets/logos/blazor.svg",
  //       },
  //       {
  //         id: 2,
  //         name: "Azure",
  //         path: "/assets/logos/azure.svg",
  //       },
  //       {
  //         id: 3,
  //         name: "Stripe",
  //         path: "/assets/logos/stripe.svg",
  //       },
  //       {
  //         id: 4,
  //         name: "TailwindCSS",
  //         path: "/assets/logos/tailwindcss.svg",
  //       },
  //     ],
  //   },
  ];
  
  export const mySocials = [
    // {
    //   name: "WhatsApp",
    //   href: "",
    //   icon: "/assets/socials/whatsApp.svg",
    // },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/harshit-verma-649b88313/",
      icon: "/assets/socials/linkedIn.svg",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/in_harshit/",
      icon: "/assets/socials/instagram.svg",
    },
    {
      name:"GitHub",
      href: "https://github.com/harshiit112",
      icon:"/assets/socials/icons8-github.gif"
    }
  ];
  
  export const experiences = [
    {
      title: "Software Developer",
      job: "Security & Defense Projects",
      date: "2021-2023",
      contents: [
        "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
        "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
        "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
        "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
        "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
      ],
    },
    {
      title: "Back-End Developer",
      job: "Car Manufacture",
      date: "2023-2024",
      contents: [
        "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
        "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
        "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
        "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
        "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
      ],
    },
    {
      title: "Freelance Developer",
      job: "Self-Employed",
      date: "2025-Present",
      contents: [
        "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
        "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
      ],
    },
  ];
  export const reviews = [
    {
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://robohash.org/jack",
    },
    {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://robohash.org/jill",
    },
    {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://robohash.org/john",
    },
    {
      name: "Alice",
      username: "@alice",
      body: "This is hands down the best thing I've experienced. Highly recommend!",
      img: "https://robohash.org/alice",
    },
    {
      name: "Bob",
      username: "@bob",
      body: "Incredible work! The attention to detail is phenomenal.",
      img: "https://robohash.org/bob",
    },
    {
      name: "Charlie",
      username: "@charlie",
      body: "This exceeded all my expectations. Absolutely stunning!",
      img: "https://robohash.org/charlie",
    },
    {
      name: "Dave",
      username: "@dave",
      body: "Simply breathtaking. The best decision I've made in a while.",
      img: "https://robohash.org/dave",
    },
    {
      name: "Eve",
      username: "@eve",
      body: "So glad I found this. It has changed the game for me.",
      img: "https://robohash.org/eve",
    },
  ];