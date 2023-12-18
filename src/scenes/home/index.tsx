import React from "react";
import { SelectedPage } from "@/shared/types";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { useMyContext } from "@/context/MyContext";
import { SnowCanvas } from "../../components/canvas";
import SignToScroll from "../../components/SignToScroll";
import TelegramBtn from "@/components/TelegramBtn";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const { language } = useMyContext();
  return (
    <section
      id="home"
      className="relative h-max w-full gap-16 bg-[#550C18] pt-10 pb-5 text-gray-50 md:pb-0 md:pt-20 lg:mx-auto lg:w-2/4"
    >
      <motion.div
        className="mx-auto mb-5 flex w-5/6 flex-wrap-reverse items-center justify-center md:mb-0 md:h-[600px] md:flex-nowrap"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* main header */}
        <div className="z-10 mt-5 md:mt-24 md:basis-3/5">
          {/* HEADINGS */}
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20  before:-left-20 before:z-[-1] md:before:content-evolvetext">
                {/* <img alt="home-page-text" src={HomePageText} /> */}
                <h1>
                  <span className="text-5xl ">Hello!</span>
                </h1>
                <p className="text-2xl">
                  My name is{" "}
                  <span className="font-bold text-secondary-500">
                    Polina Kvitka
                  </span>
                </p>
                <p className="mt-2 text-5xl font-bold text-secondary-500">
                  FRONTEND DEVELOPER
                </p>
              </div>
            </div>
            <p className="mt-10">
              {language
                ? "В 13 лет мне было интересно добавлять снежинки в HTML, а сегодня мне интересна разработка сайтов на React"
                : "The developer whose journey began with adding snowflakes to HTML at the age of 13"}
            </p>
          </div>
          {/* actions */}
          <div className="mt-5 flex items-center gap-8 md:mt-10">
            <div className="w-[200px] md:w-[300px]">
              <TelegramBtn isAnimated={false} />
            </div>
            <AnchorLink
              className="underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.OurClasses)}
              href={`#${SelectedPage.OurClasses}`}
            >
              <p>{language ? "Проекты" : "Portfolio"}</p>
            </AnchorLink>
          </div>
        </div>
        {/* img */}
        <div
          className="mt-10 flex  h-[200px] basis-3/5 justify-center
              md:z-10 md:ml-40 md:mt-16 md:h-[400px] md:justify-items-end"
        >
          <SnowCanvas />
        </div>
      </motion.div>
      {/* <SignToScroll setSelectedPage={setSelectedPage} /> */}
    </section>
  );
};

export default Home;
