import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/components/HText";
import { portfolio } from "../../shared/data/portfolioData";
import { useMyContext } from "@/context/MyContext";
import TiltElement from "@/components/TiltForWeb";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Portfolio({ setSelectedPage }: Props) {
  const { language } = useMyContext();

  return (
    <section
      className="w-full bg-neutral-50 pt-[100px] pb-[100px] lg:mx-auto lg:w-2/4"
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
            <HText>{language ? "ПОРТФОЛИО" : "PORTFOLIO"}</HText>
            <p className="py-5">
              {language
                ? "Здесь можно посмотреть мои проекты, которые я выполняла, чтобы научиться чему-то новому или реализовать какую-то свою идею. Некоторые из них еще находятся в процессе разработки"
                : "Here you can see my projects that I have worked on to learn something new or implement my own idea. Some of them are still in the development process"}
            </p>
            <p className="py-5">
              {language
                ? "Чтобы узнать больше про проект, можно нажать на него, прочитать краткое описание и перейти на git или на деплой данного проекта"
                : "To learn more about a project, you can click on it, read a brief description, and navigate to its GitHub repository or deployment"}
            </p>
          </div>
        </motion.div>

        <div className="mx-auto mt-10 flex w-5/6 flex-wrap justify-center gap-10">
          {portfolio.map((item, index) => (
            <TiltElement
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}
              deploy={item.deploy ? item.deploy : ""}
              git={item.git}
              elementsNumber={index}
            />
          ))}
        </div>

        <div className="relative z-0">
          <div className="before-bottom-20  before:absolute before:top-[-40px] before:left-60 before:h-[100px] before:w-[100px] before:content-circles md:before:left-3/4 md:before:top-[20px]" />
        </div>
      </motion.div>
    </section>
  );
}

export default Portfolio;
