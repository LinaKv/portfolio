import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Portfolio";
import { classes } from "../../shared/data/portfolioData";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Portfolio({ setSelectedPage }: Props) {
  return (
    <section className="w-full bg-neutral-50 pt-16" id="ourclasses">
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
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="flex w-[2100px] justify-between whitespace-nowrap">
            {classes.map((item, index) => (
              <Class
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
