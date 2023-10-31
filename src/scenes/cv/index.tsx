import React from "react";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
import HText from "@/components/HText";
import CVRus from "../../shared/data/CVRus.pdf";
import CVEng from "../../shared/data/CV.pdf";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";
import { useMyContext } from "@/context/MyContext";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { opacity: 1, scale: 1 },
};

function CVBlock({ setSelectedPage }: Props) {
  const { language } = useMyContext();

  return (
    <section
      id="cv"
      className="mx-auto w-full bg-neutral-50 pt-[100px] pb-5 lg:w-2/4"
    >
      <motion.div
        className=""
        onViewportEnter={() => setSelectedPage(SelectedPage.CV)}
      >
        {/* header */}
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
          <HText>
            {language
              ? "Подробнее можно ознакомиться в "
              : "You can learn more details in the "}
            <span className="text-secondary-500">
              {language ? "РЕЗЮМЕ" : "CV"}
            </span>
          </HText>
          <p className="my-5">
            {language
              ? "Ниже можно скачать и ознакомиться с резюме на русском и английском языках в PDF формате"
              : "Below, you can download and review the resume in Russian and English languages in PDF format"}
          </p>
        </motion.div>

        <div className="mx-auto flex w-5/6 flex-col items-center gap-5 md:flex-row md:justify-start">
          <div className="flex flex-col items-center md:items-start">
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
                  Скачать резюме
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
                  Download CV
                </a>
              </button>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={childVariant}
            className=""
          >
            <FolderArrowDownIcon className="h-[300px] w-[300px] text-primary-300 opacity-10 md:h-[200px] md:w-[200px]" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default CVBlock;
