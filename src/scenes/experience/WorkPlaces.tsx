import React from "react";
import { workingPlaces } from "@/shared/data/workingData";
import { workingPlace } from "@/shared/types";
import {
  convertDataRUS,
  convertDataENG,
  howManyDaysOnThisWorkRUS,
  howManyDaysOnThisWorkENG,
} from "@/helpers";
import { useMyContext } from "@/context/MyContext";

type Props = {};

function WorkPlaces({}: Props) {
  const { language } = useMyContext();

  return (
    <div className="mt-[-30px]">
      {workingPlaces.map((workingPlace: workingPlace) => (
        <div key={workingPlace.name}>
          <div className="mt-10">
            <p className="text-xl font-bold">{workingPlace.name}</p>
            {language ? (
              <p className="text-s text-primary-100">
                {convertDataRUS(workingPlace.dateStart)} -
                {convertDataRUS(workingPlace.dateEnd) || " по настоящее время"}
              </p>
            ) : (
              <p className="text-s text-primary-100">
                {convertDataENG(workingPlace.dateStart)} -{" "}
                {convertDataENG(workingPlace.dateEnd) || " present"}
              </p>
            )}
            {language ? (
              <p className="text-m font-bold text-secondary-500">
                {howManyDaysOnThisWorkRUS(
                  workingPlace.dateStart,
                  workingPlace.dateEnd
                )}
              </p>
            ) : (
              <p className="text-m font-bold text-secondary-500">
                {howManyDaysOnThisWorkENG(
                  workingPlace.dateStart,
                  workingPlace.dateEnd
                )}
              </p>
            )}
          </div>
          <div className="">
            <ul className="ml-5 list-disc">
              {language
                ? workingPlace.responsibilitiesRus
                    .sort((a, b) => b.length - a.length)
                    .map((responsibilities: string, index) => (
                      <li className="my-5" key={index * 1.5}>
                        {responsibilities}
                      </li>
                    ))
                : workingPlace.responsibilitiesEng
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
