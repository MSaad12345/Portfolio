import e_commerce1 from './assets/e-commerce1.png';
import newimg from './assets/new1.png';
import noteimg from './assets/noteimg1.png';

const project = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A full-featured e-commerce website with UI/UX design, product management, shopping cart, and user authentication.",
    tech: [
      "React",
      "React Router",
      "TailwindCSS",
      "Context API",
      "Axios",
      "React Hooks",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    live: "https://ecomapp.vercel.app", // ← update if different
    github: "https://github.com/MSaad12345/E-commerce",
    image: e_commerce1,
  },
  {
    id: 2,
    title: "News App",
    description:
      "A dynamic news app that fetches the latest articles using NewsAPI and displays them with clean UI components.",
    tech: ["React", "NewsAPI", "CSS", "React Hooks"],
    live: "https://newsapp.vercel.app",
    github: "https://github.com/MSaad12345/Newsapp",
    image: newimg,
  },
  {
    id: 3,
    title: "Note App",
    description:
      "A powerful note-taking app with full CRUD operations, routing, and backend database using MongoDB.",
    tech: [
      "React",
      "React Router",
      "TailwindCSS",
      "React Hooks",
      "Lucide Icons",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
      "CORS",
    ],
    live: "https://noteapp.vercel.app", // ← update if deployed
    github: "https://github.com/MSaad12345/Note-App",
    image: noteimg,
  },
];

export default project;
