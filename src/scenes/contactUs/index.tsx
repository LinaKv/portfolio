import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/components/HText";
import { useMyContext } from "@/context/MyContext";
import TelegramBtn from "@/components/TelegramBtn";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function ContactUs({ setSelectedPage }: Props) {
  const { language } = useMyContext();

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
          {language ? (
            <HText>
              <span className="text-secondary-500">СВЯЗАТЬСЯ СО МНОЙ</span>{" "}
              можно прямо сейчас
            </HText>
          ) : (
            <HText>
              You can <span className="text-secondary-500">CONTACT ME</span>{" "}
              right now
            </HText>
          )}

          <p className="my-5">
            {language
              ? "Напишите мне в телеграм, это наиболее удобный способ связи для меня"
              : "Contact me through Telegram. it's the most convenient way for me to communicate"}
          </p>
          {/* telegram */}

          <div className="w-full md:w-[300px]">
            <TelegramBtn isAnimated />
          </div>
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
            <p>
              {language
                ? "Или напишите мне на почту, используя форму ниже"
                : "Or write to me via email using the form below"}
            </p>
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
                placeholder={language ? "Ваше имя" : "Your name"}
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
                placeholder={language ? "Ваш e-mail" : "Your e-mail"}
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
                placeholder={language ? "Текст письма" : "Text"}
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
                {language ? "Отправить" : "Send"}
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
