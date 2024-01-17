import React from "react";
import { SelectedPage } from "@/shared/types";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { useMyContext } from "@/context/MyContext";
import SignToScroll from "../../components/SignToScroll";
import TelegramBtn from "@/components/TelegramBtn";
import HomePageGraphic from "@/assets/HomePageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const { language } = useMyContext();
  return (
    <section
      id="home"
      className="w-full gap-16 bg-[#550C18] pt-16 pb-10 text-gray-50 md:flex md:h-[900px] md:items-center md:justify-center md:pb-0 lg:mx-auto lg:w-2/4"
    >
      <motion.div
        className="mx-auto mb-5 flex  w-5/6 flex-wrap-reverse items-center justify-around md:mb-0 md:flex-nowrap"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* main header */}
        <div className="z-10 mt-5 md:mt-20 md:basis-3/5">
          {/* HEADINGS */}
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20  before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <h1 className="text-5xl">{language ? "Привет!" : "Hello!"}</h1>
                <p className="mt-2 text-2xl">
                  {language ? "Меня зовут" : "My name is"}{" "}
                  <span className="font-bold text-secondary-500">
                    {language ? "Полина Квитка" : "Polina Kvitka"}
                  </span>
                </p>
                <p className="mt-2 text-5xl font-bold text-secondary-500">
                  FRONTEND DEVELOPER
                </p>
              </div>
            </div>
            <p className="mt-5">
              {language
                ? "В 13 лет мне было интересно добавлять снежинки в HTML, а сегодня мне интересна разработка сайтов на React"
                : "The developer whose journey began with adding snowflakes to HTML at the age of 13"}
            </p>
          </div>
          {/* actions */}
          <div className=" relative mt-5 flex items-center gap-8 md:mt-10">
            <div className="w-[200px] md:w-[300px]">
              <TelegramBtn isAnimated={false} />
            </div>
            <AnchorLink
              className="underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.OurClasses)}
              href={`#${SelectedPage.OurClasses}`}
            >
              <p>{language ? "Портфолио" : "Portfolio"}</p>
            </AnchorLink>
            <SignToScroll setSelectedPage={setSelectedPage} />
          </div>
        </div>
        {/* img */}
        <div
          className="mt-12 mb-12 flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end "
        >
          <img
            src={HomePageGraphic}
            alt="home-pageGraphic"
            className="max-h-[600px]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
