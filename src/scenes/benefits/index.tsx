import ActionButton from "@/components/ActionButton";
import HText from "@/components/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.jpg";
import Programming from "@/assets/progr.png";
import Skills from "./Skills";
import { useMyContext } from "@/context/MyContext";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Benefits({ setSelectedPage }: Props) {
  const { language } = useMyContext();

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
          <HText>{language ? "Навыки" : "Skills"}</HText>
          <p className="my-5 text-sm">
            {language
              ? "Здесь собраны основные технологии с которыми я работаю"
              : "Here are the main technologies I work with"}
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="md:flex md:justify-between lg:mx-auto lg:w-5/6">
          <div className="mt-5 items-center justify-center gap-5 md:flex md:flex-col md:flex-wrap md:items-start">
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
                    {language
                      ? "ЧТО Я МОГУ СДЕЛАТЬ ДЛЯ ВАШЕГО ПРОЕКТА, КАК"
                      : "WHAT I CAN DO FOR YOUR PROJECT AS"}{" "}
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
                  {language
                    ? "Разработать приложение (SPA,SSR)"
                    : "Develop an application (SPA, SSR)"}
                </li>
                <li className="mb-5">
                  {language
                    ? "Осуществить кросс-браузерную, адаптивную верстку пользовательских интерфейсов, компонентов/элементов дизайна"
                    : "Implement cross-browser, responsive layout for user interfaces, design components/elements"}
                </li>
                <li className="mb-5">
                  {language
                    ? "Интегрировать клиентскую часть с серверной через Rest API"
                    : "Integrate the client-side with the server-side through a Rest API"}
                </li>
                <li className="mb-5">
                  {language
                    ? "Покрыть код Unit-тестами"
                    : "Cover the code with unit tests"}
                </li>
                <li className="mb-5">
                  {language
                    ? "Оптимизировать ранее написанный код"
                    : "Optimize previously written code"}
                </li>
              </ul>
            </motion.div>
            {/* button */}
            <div className="relative mt-16">
              <div className="before-bottom-20 before:absolute before:right-40  before:top-10 before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  {language ? "Связаться со мной" : "Connect with me"}
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
