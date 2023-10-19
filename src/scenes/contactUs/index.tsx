import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
import { triggerAsyncId } from "async_hooks";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function ContactUs({ setSelectedPage }: Props) {
  const inputStyles =
    "w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mt-5 text-gray-20";

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
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        className=""
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* header */}
        <motion.div
          className="md:w-3/5"
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
        </motion.div>
        <motion.div
          className="mt-10 flex items-center justify-center md:mt-0 md:justify-start"
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
            className="rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
          >
            TELEGRAM
          </a>
        </motion.div>
        {/* FORM and IMG */}
        <div className="mt-10 justify-between gap-8 md:flex">
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
              action="https://formsubmit.co/kvitka.p@yandex.ru"
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
                placeholder="EMAIL"
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
                placeholder="Ваше письмо"
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
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                Отправить
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
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
