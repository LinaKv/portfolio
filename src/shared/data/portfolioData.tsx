import { ClassType } from "@/shared/types";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import image8 from "@/assets/image8.png";
import image7 from "@/assets/image7.png";

export const portfolio: Array<ClassType> = [
  {
    name: "Move Table",
    deploy: "https://14b84fe3.movetables.pages.dev/",
    git: "https://github.com/LinaKv/MoveTables",
    description: "JavaScript, CSS, React, file-saver, react-dnd, uuid",
    image: image4,
  },
  {
    name: "Find a job",
    git: "https://github.com/LinaKv/findJobApp",
    description: "JavaScript, React-Native, React, axios, expo-router",
    image: image8,
  },
  {
    name: "Users",
    git: "https://github.com/LinaKv/testFrontUsers",
    description:
      "TypeScript, CSS, React, redux toolkit, axios, react-toastify, react-router-dom, throttle-debounce",
    image: image5,
  },
  {
    name: "House-Market",
    git: "https://github.com/LinaKv/House-market.git",
    description:
      "JavaScript, React, React-router-dom, React-dom, react-toastify, FireBase",

    image: image2,
  },
  {
    name: "Sociopedia",
    git: "https://github.com/LinaKv/Fullstack-App/tree/main",
    description:
      "JavaScript, React, React-router-dom, React-dom, react-toastify, axios, formik, nodeJS",
    image: image3,
  },
  {
    name: "Evogym",
    deploy: "https://gym-application-ts.pages.dev/",
    git: "https://github.com/LinaKv/gym-application-ts",
    description: "TypeScript, Tailwind, React, Framer-motion",
    image: image6,
  },
  {
    name: "Airplane",
    git: "https://github.com/LinaKv/Airplane",
    description: "JavaScript, Three.JS, react-three/drei, react-three/fiber",
    image: image7,
  },
];
