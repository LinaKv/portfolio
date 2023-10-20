import React from "react";
import { workingPlaces } from "@/shared/data/workingData";
import { workingPlace } from "@/shared/types";
import { convertData, howManyDaysOnThisWork } from "@/helpers";

type Props = {};

function WorkPlaces({}: Props) {
  return (
    <div className="mt-[-30px]">
      {workingPlaces.map((workingPlace: workingPlace) => (
        <div key={workingPlace.name}>
          <div className="mt-10">
            <p className="text-xl font-bold">{workingPlace.name}</p>
            <p className="text-s text-primary-100">
              {convertData(workingPlace.dateStart)} -{" "}
              {convertData(workingPlace.dateEnd) || "по настоящее время"}
            </p>
            <p className="text-m font-bold text-secondary-500">
              {howManyDaysOnThisWork(
                workingPlace.dateStart,
                workingPlace.dateEnd
              )}
            </p>
          </div>
          <div className="">
            <ul className="ml-5 list-disc">
              {workingPlace.responsibilities
                .sort((a, b) => b.length - a.length)
                .map((responsibilities: string, index) => (
                  <li className="my-5" key={index * 1.5}>
                    {responsibilities}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkPlaces;
