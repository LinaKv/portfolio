import ActionButton from "@/components/ActionButton";
import HText from "@/components/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.jpg";
import Programming from "@/assets/progr.png";
import Skills from "./Skills";
import { useMyContext } from "@/context/MyContext";
import { SnowCanvas } from "@/components/canvas";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Benefits({ setSelectedPage }: Props) {
  const { language } = useMyContext();

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6  lg:w-2/4">
      <motion.div
        className=""
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Graphics and description*/}
        <div className="mt-5 flex-col items-center justify-between gap-20 md:mt-28 md:flex md:flex-row lg:mx-auto lg:w-5/6">
          {/* graphics */}
          <div className="mb-16 flex flex-col items-center gap-5 md:mb-0 md:gap-10">
            <div className="h-[250px] min-w-[350px] md:z-10 md:mt-16 md:h-[450px] md:w-[500px]">
              <SnowCanvas />
            </div>
            <div className="slogan">
              {language
                ? "От любви к головоломкам до любви к программированию"
                : "From a love for puzzles to a love for programming"}
            </div>
          </div>

          {/* description */}
          <div className="">
            {/* tittle */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  className=""
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    {language ? "МОЙ ОСНОВНОЙ STACK, КАК" : "MY STACK AS"}{" "}
                    <span className="text-secondary-500">
                      FRONTEND DEVELOPER
                    </span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* description */}
            <motion.div
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0, duration: 0.5 }}
            >
              <div className="mt-5 items-center justify-center gap-5 md:flex md:flex-col md:flex-wrap md:items-start ">
                <Skills
                  typeOfSkillsToDisplay={
                    language ? "Языки программирования" : "Languages"
                  }
                  typeOfSkills="language"
                />

                <Skills
                  typeOfSkillsToDisplay="Framework"
                  typeOfSkills="framework"
                />
                <Skills
                  typeOfSkillsToDisplay={language ? "Базы Данных" : "Database"}
                  typeOfSkills="bd"
                />
                <Skills
                  typeOfSkillsToDisplay={language ? "Библиотеки" : "Libraries"}
                  typeOfSkills="library"
                />
                <Skills
                  typeOfSkillsToDisplay={language ? "Тестирование" : "Testing"}
                  typeOfSkills="testing"
                />
                <Skills
                  typeOfSkillsToDisplay={language ? "Прочее" : "Other"}
                  typeOfSkills="other"
                />
              </div>
            </motion.div>
            {/* sparkle */}
            <div className="relative mt-10">
              <div className="before-bottom-10 before:absolute before:right-40  before:top-[-35px] before:content-sparkles"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;
