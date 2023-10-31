import React from "react";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/components/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { useMyContext } from "@/context/MyContext";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const { language, updateLanguage } = useMyContext();

  return (
    <section
      id="home"
      className="h-max gap-16 bg-neutral-50 pt-20 pb-5 md:pb-0 md:pt-20 lg:mx-auto lg:w-2/4"
    >
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* main header */}
        <div className="z-10 mt-20 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20  before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p className="mt-8 text-sm">
              {language
                ? "Тот самый разработчик, чей путь начался с добавления снежинок в html в 13 лет"
                : "The developer whose journey began with adding snowflakes to HTML at the age of 13"}
            </p>
          </motion.div>
          {/* actions */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              {" "}
              {language ? "Связаться со мной" : "Connect with me"}
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.OurClasses)}
              href={`#${SelectedPage.OurClasses}`}
            >
              <p>{language ? "Проекты" : "Portfolio"}</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* img */}
        <div
          className="mt-12 mb-12 flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end "
        >
          <img
            src={HomePageGraphic}
            alt="home-pageGraphic"
            className="max-h-96"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
