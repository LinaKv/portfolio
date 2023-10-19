// function to know how many days I'm working
export function howManyWorkingExp() {
  const firstPlace = new Date("2022-10-01");
  const secondPlaceStart = new Date("2023-06-01");
  const secondPlaceFinish = new Date("2023-09-01");
  const today = new Date();

  const timeInTheFirstPlace = Math.ceil(
    (today.getTime() - firstPlace.getTime()) / (1000 * 60 * 60 * 24)
  );
  const timeInTheSecondPLace = Math.ceil(
    (secondPlaceFinish.getTime() - secondPlaceStart.getTime()) /
      (1000 * 60 * 60 * 24)
  );

  const allDays = timeInTheFirstPlace + timeInTheSecondPLace;

  const years = Math.floor(allDays / 365);
  const remainingDays = allDays % 365;

  const months = Math.floor(remainingDays / 30);

  const result = [];

  if (years > 0) {
    result.push(`${years} ${years === 1 ? "год" : "года"}`);
  }

  if (months > 0) {
    result.push(`${months} ${months === 1 ? "месяц" : "месяца"}`);
  }

  return result.join(" ");
}

// function to convert format 2023-01-01 to format 01 month
export function convertData(dateString: string | null) {
  if (!dateString) return null;
  const [year, month] = dateString.split("-");

  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const monthName = monthNames[parseInt(month, 10) - 1];

  const resultString = `${monthName} ${year}`;

  return resultString;
}

// function to calc how many days I'm working on one place
export function howManyDaysOnThisWork(
  dateStartString: string,
  dateEndString: string | null
) {
  const dateStart = new Date(dateStartString);
  const dateEnd = dateEndString ? new Date(dateEndString) : new Date();

  const timeBetween = Math.ceil(
    (dateEnd.getTime() - dateStart.getTime()) / (1000 * 60 * 60 * 24)
  );

  const years = Math.floor(timeBetween / 365);
  const remainingDays = timeBetween % 365;

  const months = Math.floor(remainingDays / 30);

  const result = [];

  if (years > 0) {
    result.push(`${years} ${years === 1 ? "год" : "года"}`);
  }

  if (months > 0) {
    result.push(`${months} ${months === 1 ? "месяц" : "месяца"}`);
  }

  return result.join(" ");
}
