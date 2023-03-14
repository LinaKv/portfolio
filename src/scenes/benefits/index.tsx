import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefits";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefit: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam suscipit architecto commodi quas, neque delectus? Sed consequatur incidunt aliquam iure laborum cupiditate asperiores, tempora eos nostrum quia minus et! Quo.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam suscipit architecto commodi quas, neque delectus? Sed consequatur incidunt aliquam iure laborum cupiditate asperiores, tempora eos nostrum quia minus et! Quo.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro trainers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam suscipit architecto commodi quas, neque delectus? Sed consequatur incidunt aliquam iure laborum cupiditate asperiores, tempora eos nostrum quia minus et! Quo.",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Benefits({ setSelectedPage }: Props) {
  return (
    <section id="benefit" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        className=""
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST GYM</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers ans classes to
            get you to your ultimate fitness goals with ease. We provider true
            care into each end every member.
          </p>
        </motion.div>
        {/* Benefits */}
        <div className="mt-5 items-center justify-between gap-8 md:flex">
          {benefit.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
        {/* Graphics and description*/}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* graphics */}
          <img
            className="mx-auto"
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
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* description */}
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Necessitatibus non impedit consequuntur laboriosam aliquam! Et
                laborum ad numquam totam. Suscipit adipisci eaque mollitia odit
                blanditiis officiis cupiditate vel consequuntur fugit.
              </p>
            </motion.div>
            {/* button */}
            <div className="relative mt-16">
              <div className="before-bottom-20 before: z-[-1] before:absolute before:right-40 before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
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
