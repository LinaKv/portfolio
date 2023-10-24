import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function ContactUs({ setSelectedPage }: Props) {
  const inputStyles =
    "focus:outline-none focus:border-2 focus:border-primary-500 w-full rounded-lg bg-gray-20 border-2 border-primary-100 px-5 py-3 placeholder-primary-500 mt-5 text-primary-500 ";

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section
      id="contactus"
      className="mx-auto w-5/6 pt-[100px] pb-5 md:mt-[-40px] lg:w-2/4"
    >
      <motion.div
        className=""
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* header */}
        <motion.div
          className="md:w-3/5 lg:mx-auto lg:w-5/6"
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
            <span className="text-secondary-500">СВЯЗАТЬСЯ СО МНОЙ</span> можно
            прямо сейчас
          </HText>
          <p className="my-5">
            Напишите мне в телеграм, чтобы связаться со мной как можно быстрее
          </p>
          {/* telegram */}
          <motion.div
            className=" flex justify-center md:mt-0 md:justify-start"
            initial="hidden"
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
              className="pulse flex w-[300px] items-center justify-center gap-5 rounded-full bg-blue-500 py-3  px-5 text-white transition duration-500 hover:text-white  md:items-start"
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
              Написать в Telegram
            </a>
          </motion.div>
        </motion.div>
        {/* FORM and IMG */}
        <div className="mt-10 justify-between gap-8 md:flex lg:mx-auto lg:w-5/6">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p>Или напишите мне на почту, используя форму ниже</p>
            <form
              method="POST"
              action="https://formsubmit.co/be41cb1352dd8731a4ec0d82d9c3a917"
              target="_blank"
              onSubmit={onSubmit}
            >
              {/* <input type="email" name="email" /> */}
              <input
                type="text"
                className={inputStyles}
                placeholder="Ваше имя"
                name="name"
                {...(register("name"),
                {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-gray-20">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                type="text"
                className={inputStyles}
                placeholder="Ваш e-mail"
                name="email"
                {...(register("email"),
                {
                  required: true,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-gray-20">
                  {errors.email.type === "required" && "This field is required"}
                </p>
              )}

              <textarea
                className={inputStyles}
                name="message"
                rows={4}
                cols={50}
                placeholder="Текст письма"
                {...(register("message"),
                {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-gray-20">
                  {errors.message.type === "required" &&
                    "This field is required"}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                type="submit"
                className=" mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                Отправить
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full md:ml-10 md:mt-[-120px]"
                src={ContactUsPageGraphic}
                alt="contact us"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactUs;
