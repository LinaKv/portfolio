import React from "react";
import { motion } from "framer-motion";
import { useMyContext } from "@/context/MyContext";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  isAnimated: boolean;
};

function TelegramBtn({ isAnimated = true }: Props) {
  const { language } = useMyContext();
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const textRus = isAboveMediumScreens ? "Написать в Telegram" : "Telegram";
  const textEng = isAboveMediumScreens ? "Write to me on Telegram" : "Telegram";

  return (
    <motion.div
      className="flex w-full justify-center md:mt-0 md:justify-start"
      initial={isAnimated ? "hidden" : "visible"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <a
        href="https://t.me/polina_obw"
        target="_blank"
        className="pulse flex w-full items-center justify-center gap-5 rounded-full bg-blue-500 py-3 px-5  text-white transition duration-500 hover:text-white   md:items-start"
      >
        <svg
          className="h-6 w-6"
          viewBox="0 0 21 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fff"
            d="M0.554 7.092L19.117 0.078C19.737 -0.156 20.429 0.156 20.663 0.776C20.745 0.994 20.763 1.23 20.713 1.457L17.513 16.059C17.351 16.799 16.62 17.268 15.88 17.105C15.696 17.065 15.523 16.987 15.37 16.877L8.997 12.271C8.614 11.994 8.527 11.458 8.805 11.074C8.835 11.033 8.869 10.994 8.905 10.958L15.458 4.661C15.594 4.53 15.598 4.313 15.467 4.176C15.354 4.059 15.174 4.037 15.036 4.125L6.104 9.795C5.575 10.131 4.922 10.207 4.329 10.002L0.577 8.704C0.13 8.55 -0.107 8.061 0.047 7.614C0.131 7.374 0.316 7.182 0.554 7.092Z"
          ></path>
        </svg>
        {language ? textRus : textEng}
      </a>
    </motion.div>
  );
}

export default TelegramBtn;
