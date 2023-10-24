import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Project from "./Portfolio";
import { portfolio } from "../../shared/data/portfolioData";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Portfolio({ setSelectedPage }: Props) {
  return (
    <section
      className="w-full bg-neutral-50 pt-[100px]  lg:mx-auto lg:w-2/4"
      id="ourclasses"
    >
      <motion.div
        className=""
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>ПОРТФОЛИО</HText>
            <p className="py-5">
              Это проекты, которые я выполняла сама, чтобы научиться чему-то
              новому или просто реализовать какую-то свою идею. Некоторые из них
              еще находятся в процессе разработке
            </p>
            <p className="py-5">
              Чтобы узнать больше про проект, можно нажать на него, прочитать
              краткое описание и перейти на гит или на деплой данного проекта
            </p>
          </div>
        </motion.div>

        {/* click or swipe */}
        <motion.div
          className="mx-auto flex w-5/6 justify-center md:mt-0 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="mb-5 mt-10 flex w-[400px] animate-bounce items-center justify-center gap-5 px-5 ">
            <ArrowLeftCircleIcon className="h-[40px] w-[40px] text-secondary-500" />
            Нажми или Свайпни
            <ArrowRightCircleIcon className="h-[40px] w-[40px] text-secondary-500" />
          </div>
        </motion.div>
        {/* project */}
        <div className="relative z-10 h-[353px] w-full overflow-x-auto overflow-y-hidden border-2 border-primary-100 bg-gray-20">
          <ul className="flex w-[2100px] justify-between whitespace-nowrap">
            {portfolio.map((item, index) => (
              <Project
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>

        <div className="relative z-0">
          <div className="before-bottom-20  before:absolute before:top-[-40px] before:left-60 before:h-[100px] before:w-[100px] before:content-circles md:before:left-3/4 md:before:top-[20px]" />
        </div>
      </motion.div>
    </section>
  );
}

export default Portfolio;
