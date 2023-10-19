import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  title: string;
};

function Benefit({ title }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={childVariant}
      className="mt-5 flex justify-center rounded-md border-2 border-gray-100 px-2 py-2 text-center"
    >
      <h4 className="font-bold">{title}</h4>
    </motion.div>
  );
}

export default Benefit;
