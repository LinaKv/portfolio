import React, { useEffect } from "react";
import { motion } from "framer-motion";
import HText from "@/components/HText";
import { SelectedPage } from "@/shared/types";
import { howManyWorkingExp } from "@/helpers";
import WorkPlaces from "./WorkPlaces";
import { useMyContext } from "@/context/MyContext";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Experience({ setSelectedPage }: Props) {
  const { language } = useMyContext();

  let experience = howManyWorkingExp(language);
  useEffect(() => {
    experience = howManyWorkingExp(language);
  }, [language]);

  return (
    <section
      className="mt-[-40px] w-full pt-[100px] pb-5 lg:mx-auto lg:w-2/4"
      id="experience"
    >
      <motion.div
        className=""
        onViewportEnter={() => setSelectedPage(SelectedPage.Experience)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className=" md:w-3/5">
            <HText>{language ? "ОПЫТ РАБОТЫ" : "EXPERIENCE"}</HText>
            <p className="py-5">
              {language
                ? "Мой коммерческий опыт работы составляет"
                : "My commercial work experience is"}{" "}
              <span className="font-montserrat text-xl font-bold text-secondary-500">
                {experience}
              </span>
            </p>
          </div>

          <WorkPlaces />
        </motion.div>
      </motion.div>
      <div className="relative">
        <div className=" before:absolute before:top-0 before:right-0 before:z-[1] before:content-abstractwaves" />
      </div>
    </section>
  );
}

export default Experience;
