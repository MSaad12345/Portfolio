import e_commerce1 from "./assets/e-commerce1.png";
import e_commerce2 from "./assets/new2.png";
import newimg from "./assets/new1.png";
import noteimg from "./assets/noteimg1.png";
import newsimg from "./assets/rideshare.png";

const project = [
  {
    id: 1,
    title: "Rideshare Platform",
    type: "Company Project",
    description:
      "Production-ready full-stack ride-sharing platform with complex relational database, optimized data fetching, and JWT-secured routes. Deployed with fully responsive UI.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "RTK Query",
      "JWT",
      "Postman",
      "OOP",
    ],
    live: "#",
    github: "https://github.com/MSaad12345",
    image: e_commerce2,
    period: "Aug 2025 – Nov 2025",
    highlights: [
      "Architected complex PostgreSQL schema with relational queries",
      "Integrated RTK Query for optimized API caching and synchronization",
      "Applied OOP principles in backend service layer",
      "Secured all routes with JWT authentication",
      "Validated 15+ API endpoints using Postman",
    ],
  },
  {
    id: 2,
    title: "SuthraPunjab ",
    type: "Company Project",
    description:
      "Full-stack e-commerce dashboard with 200+ product listings, dynamic filtering, cart management, and comprehensive API documentation. Built with Context API and Swagger.",
    tech: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Swagger",
      "JWT",
    ],
    live: "#",
    github: "https://github.com/MSaad12345",
    image: newsimg,
    period: "Jun 2025 – Jul 2025",
    highlights: [
      "Managed 200+ product listings with dynamic filtering and cart",
      "Implemented Context API for global state management",
      "Documented all REST APIs using Swagger/OpenAPI",
      "Built MongoDB/Mongoose models with aggregation pipelines",
      "Secured login/signup with JWT authentication",
    ],
  },
  {
    id: 3,
    title: "Shoe Store E-Commerce",
    type: "Personal Project",
    description:
      "Full-stack e-commerce app for footwear with product categories (Men, Women, Kids), shopping cart, and JWT-based authentication. 36+ products with responsive UI.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "CSS",
    ],
    live: "#",
    github: "https://github.com/MSaad12345",
    image: e_commerce1,
    period: "2025",
    highlights: [
      "Product catalog with Men, Women, Kids category filtering",
      "Shopping cart with persistent state management",
      "JWT-based login/logout authentication flow",
      "36+ product listings with sort functionality",
      "Fully responsive layout across all devices",
    ],
  },
  {
    id: 4,
    title: "Note App",
    type: "Personal Project",
    description:
      "MERN stack note-taking application with full CRUD operations, MongoDB persistence, and a clean responsive UI. Notes are saved and loaded on app start.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST API",
    ],
    live: "#",
    github: "https://github.com/MSaad12345",
    image: noteimg,
    period: "2025",
    highlights: [
      "Full CRUD operations — create, edit, and delete notes",
      "MongoDB persistence with Mongoose data models",
      "React hooks: useState and useEffect for side effects",
      "RESTful API built with Node.js and Express.js",
      "Clean responsive card-based UI",
    ],
  },
  {
    id: 5,
    title: "News App",
    type: "Personal Project",
    description:
      "React news aggregator consuming a live News API with real-time search, category dropdowns, and a responsive card-based article feed.",
    tech: ["React.js", "JavaScript", "News API", "Bootstrap", "REST API"],
    live: "#",
    github: "https://github.com/MSaad12345",
    image: newimg,
    period: "2025",
    highlights: [
      "Live news feed via third-party News API integration",
      "Search functionality with real-time filtering",
      "Category-based navigation (Home, About, Dropdown)",
      "Responsive card layout with Read More links",
      "Clean navbar with mobile hamburger support",
    ],
  },
];

export default project;
