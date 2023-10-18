import React from "react";
import { skills } from "./data";
import { SkillsType } from "@/shared/types";
import Benefit from "./Benefits";

type Props = {
  typeOfSkillsToDisplay: string;
  typeOfSkills?: string;
};

function Skills({ typeOfSkills, typeOfSkillsToDisplay }: Props) {
  return (
    <div className="md:flex md:items-center md:gap-5">
      <h1 className="mt-5 font-bold">{typeOfSkillsToDisplay}</h1>
      {skills
        .filter((skill: SkillsType) => skill.type === typeOfSkills)
        .map((skill: SkillsType) => (
          <Benefit key={skill.title} title={skill.title} />
        ))}
    </div>
  );
}

export default Skills;
