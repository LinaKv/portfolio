import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.jpg";
import Programming from "@/assets/progr.png";
import Skills from "./Skills";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Benefits({ setSelectedPage }: Props) {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 pt-[100px] pb-20 lg:w-2/4"
    >
      <motion.div
        className=""
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div
          className="md:my-5 md:w-3/5 lg:mx-auto lg:w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>Навыки</HText>
          <p className="my-5 text-sm">
            Здесь собраны основные технологии с которыми я умею работать
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="md:flex md:justify-between lg:mx-auto lg:w-5/6">
          <div className="mt-5 items-center justify-center gap-5 md:flex md:flex-col md:flex-wrap md:items-start">
            <Skills
              typeOfSkillsToDisplay="Языки программирования"
              typeOfSkills="language"
            />

            <Skills
              typeOfSkillsToDisplay="Framework"
              typeOfSkills="framework"
            />
            <Skills typeOfSkillsToDisplay="Базы Данных" typeOfSkills="bd" />
            <Skills typeOfSkillsToDisplay="Библиотеки" typeOfSkills="library" />
            <Skills
              typeOfSkillsToDisplay="Тестирование"
              typeOfSkills="testing"
            />
            <Skills typeOfSkillsToDisplay="Прочее" typeOfSkills="other" />
          </div>
          <div className="md:flex md:items-center">
            <img
              src={Programming}
              alt="My skills"
              className="hidden md:ml-40 md:block"
            />
          </div>
        </div>

        {/* Graphics and description*/}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex lg:mx-auto lg:w-5/6">
          {/* graphics */}
          <img
            className="mx-auto mb-16"
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
          />
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
                    ЧТО Я МОГУ СДЕЛАТЬ ДЛЯ ВАШЕГО ПРОЕКТА, КАК{" "}
                    <span className="text-secondary-500">
                      FRONTEND DEVELOPER
                    </span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 0 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ul className="ml-5 list-disc">
                <li className="my-5">
                  Разработать приложение (SPA,SSR) на React, JavaScript,
                  TypeScript;
                </li>
                <li className="mb-5">
                  Осуществить кросс-браузерную, адаптивную верстку
                  пользовательских интерфейсов, компонентов/элементов дизайна
                  (CSS, SASS, CSS-in-JS)
                </li>
                <li className="mb-5">
                  Реализовать логику работы функционала всех пользовательских
                  интерфейсов (Redux, Redux Toolkit);
                </li>
                <li className="mb-5">
                  Интегрировать клиентскую часть с серверной через Rest API;
                </li>
                <li className="mb-5">Покрыть код Unit-тестами</li>
                <li className="mb-5">
                  Рефакторить, оптимизировать ранее написанный код.
                </li>
              </ul>
            </motion.div>
            {/* button */}
            <div className="relative mt-16">
              <div className="before-bottom-20 before:absolute before:right-40  before:top-10 before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Связаться со мной сейчас
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;
