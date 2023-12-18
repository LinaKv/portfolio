import React from "react";
import { workingPlaces } from "@/shared/data/workingData";
import { workingPlace } from "@/shared/types";
import { useMyContext } from "@/context/MyContext";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import iconReact from "@/assets/react-logo.png";

type Props = {
  experience: workingPlace;
  language: boolean;
};

const ExperienceCard = ({ experience, language }: Props) => (
  <VerticalTimelineElement
    lineColor={{ background: "#3D553A" }}
    contentStyle={{
      background: "#FAFAFA",
      color: "#3D553A",
    }}
    contentArrowStyle={{
      borderRadius: "7px solid #232631",
    }}
    date={experience.dateStart}
    iconStyle={{
      background: "#FAFAFA",
      color: "#FFB647",
    }}
    icon={
      <div className="flex h-full w-full items-center justify-center">
        <img
          src={iconReact}
          alt={experience.name}
          className="h-[60%] w-[60%] object-contain"
        />
      </div>
    }
  >
    <div className="">
      <h3 className="text-[24px] font-bold text-secondary-500">
        Frontend Developer
      </h3>
      <p className="text-secondary text-[16px] font-bold" style={{ margin: 0 }}>
        {experience.name}
      </p>
    </div>

    <ul className="mt-5 ml-5 list-disc space-y-2">
      {language
        ? experience.responsibilitiesRus.map((point: string, index: number) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 pl-1"
            >
              {point}
            </li>
          ))
        : experience.responsibilitiesEng.map((point: string, index: number) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 pl-1"
            >
              {point}
            </li>
          ))}
    </ul>
  </VerticalTimelineElement>
);

function WorkPlaces() {
  const { language } = useMyContext();

  return (
    <div className="mt-[-30px]">
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {workingPlaces.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              language={language}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default WorkPlaces;
