import React from "react";
import { skills } from "../../shared/data/skillsData";
import { SkillsType } from "@/shared/types";
import Benefit from "./Benefits";

type Props = {
  typeOfSkillsToDisplay: string;
  typeOfSkills?: string;
};

function Skills({ typeOfSkills, typeOfSkillsToDisplay }: Props) {
  return (
    <div className="md:flex md:flex-col md:items-start md:justify-start">
      <h1 className="mt-10 font-bold">{typeOfSkillsToDisplay}</h1>
      {/* skills */}
      <div className="gap-5 md:flex">
        {skills
          .filter((skill: SkillsType) => skill.type === typeOfSkills)
          .map((skill: SkillsType) => (
            <Benefit key={skill.title} title={skill.title} />
          ))}
      </div>
    </div>
  );
}

export default Skills;
