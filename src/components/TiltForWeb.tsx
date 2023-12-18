import React from "react";
import gitGub from "@/assets/githubModel.png";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import Tilt from "react-parallax-tilt";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";

type Props = {
  name: string;
  description: string;
  image: string;
  deploy: string;
  git: string;
  elementsNumber: number;
};

function TiltElement({
  name,
  description,
  image,
  deploy,
  git,
  elementsNumber,
}: Props) {
  const isWeb = useMediaQuery("(max-width: 400px)");

  return !isWeb ? (
    <Tilt
      scale={1.5}
      transitionSpeed={2500}
      className="hover:z-10"
      perspective={2000}
    >
      <div className="w-[250px] text-xs drop-shadow-lg">
        <div className="relative flex min-h-[280px] w-full flex-col items-center justify-evenly rounded-[20px] bg-gray-50  py-5 px-3 text-gray-500 ">
          {/* Project */}
          <img
            src={image}
            className="w-full rounded-[10px] border border-primary-300  object-contain"
          />
          <h3 className="mt-5 text-center text-[20px] font-bold">{name}</h3>

          <div className="text-left">
            <p className="py-2">
              <span className="font-bold">Stack:</span> {description}
            </p>
          </div>

          {/* git */}

          <a
            href={git}
            target="_blank"
            className="underline underline-offset-2"
          >
            <img
              src={gitGub}
              className="absolute top-3 right-0 w-[49px] cursor-pointer rounded-full bg-gray-50 p-1 active:animate-ping sm:hover:w-[52px]"
            />
          </a>

          {deploy && (
            <a
              href={deploy}
              target="_blank"
              className="underline underline-offset-2"
            >
              <PlayCircleIcon className="absolute top-2 left-0 w-[49px] cursor-pointer rounded-full bg-gray-50 text-[#0FBC1F] hover:w-[65px] active:animate-ping" />
            </a>
          )}
        </div>
      </div>
    </Tilt>
  ) : (
    <motion.div
      className="mx-auto w-5/6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: elementsNumber % 2 ? 50 : -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <div className="w-[250px] drop-shadow-lg">
        <div className="relative flex min-h-[280px] w-full flex-col items-center justify-evenly rounded-[20px] bg-gray-50  py-5 px-3 text-gray-500 ">
          {/* Project */}
          <img
            src={image}
            className="w-[400px] rounded-[10px] border border-primary-300  object-contain"
          />
          <h3 className="mt-5 text-center text-[20px] font-bold">{name}</h3>

          <div className="text-left">
            <p className="py-2">
              <span className="font-bold">Stack:</span> {description}
            </p>
          </div>

          {/* git */}
          <a
            href={git}
            target="_blank"
            className="underline underline-offset-2"
          >
            <img
              src={gitGub}
              className="absolute top-3 right-0 w-[49px] cursor-pointer rounded-full bg-gray-50 p-1 active:animate-ping sm:hover:w-[60px]"
            />
          </a>

          {deploy && (
            <a
              href={deploy}
              target="_blank"
              className="underline underline-offset-2"
            >
              <PlayCircleIcon className="absolute top-2 left-0 w-[49px] cursor-pointer rounded-full bg-gray-50 text-[#0FBC1F] hover:w-[65px] active:animate-ping" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default TiltElement;
