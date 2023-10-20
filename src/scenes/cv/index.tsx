import React from "react";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import CVRus from "../../shared/data/CVRus.pdf";
import CVEng from "../../shared/data/CV.pdf";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { opacity: 1, scale: 1 },
};

function CVBlock({ setSelectedPage }: Props) {
  return (
    <section id="cv" className="mx-auto w-5/6 pt-[88px] pb-5">
      <motion.div
        className=""
        onViewportEnter={() => setSelectedPage(SelectedPage.CV)}
      >
        {/* header */}
        <motion.div
          className="relative md:w-3/5"
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
            <span className="text-secondary-500">РЕЗЮМЕ</span> можно скачать на
            русском и английском
          </HText>
          <p className="my-5">
            Ниже можно скачать и ознакомиться с моим резюме на русском и
            английском языках в PDF формате
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-5 md:relative">
          <div className="flex w-full flex-col items-center md:items-start">
            {/* Rus cv */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={childVariant}
            >
              <button
                type="submit"
                className="mt-5 w-[300px] rounded-lg bg-secondary-500 px-10 py-3 transition duration-500 hover:text-white"
              >
                <a href={CVRus} download="PolinaKvitka.pdf">
                  Резюме Полина Квитка
                </a>
              </button>
            </motion.div>

            {/* Eng CV */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={childVariant}
            >
              <button
                type="submit"
                className="mt-5 w-[300px] rounded-lg bg-secondary-500 px-10 py-3 transition duration-500 hover:text-white"
              >
                <a href={CVEng} download="PolinaKvitka.pdf">
                  CV Polina Kvitka
                </a>
              </button>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={childVariant}
            className="md:absolute md:top-[-20px] md:left-[350px]"
          >
            <FolderArrowDownIcon className="h-[300px] w-[300px] text-primary-300 opacity-10 md:h-[200px] md:w-[200px]" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default CVBlock;
