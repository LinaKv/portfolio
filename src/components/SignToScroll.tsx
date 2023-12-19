import React from "react";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function SignToScroll({ setSelectedPage }: Props) {
  return (
    <AnchorLink
      className="absolute bottom-[-75px] flex w-full items-center justify-center xs:hidden"
      onClick={() => setSelectedPage("benefits" as SelectedPage)}
      href={`#benefits`}
    >
      <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary-500 p-2">
        <motion.div
          className="mb-1 h-3 w-3 rounded-full bg-secondary-500"
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </div>
    </AnchorLink>
  );
}

export default SignToScroll;
