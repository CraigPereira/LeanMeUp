import {
  HeartMeterSvg,
  WheySvg,
  TreadMillSvg,
  WeightScale,
  AppleSvg,
  SmallBottleSvg,
  TallBottleSvg,
} from "./SVGs.jsx";

export const RegexPass = new RegExp(
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#?&()])[A-Za-z\d@$!%#?&()]{6,}$/
);
export const RegexEmail = new RegExp(/\S+@\S+\.\S+/);

export const renderSvg = (name) => {
  switch (name) {
    case "HeartMeterSvg":
      return HeartMeterSvg();
    case "WheySvg":
      return WheySvg();
    case "TreadMillSvg":
      return TreadMillSvg();
    case "WeightScale":
      return WeightScale();
    case "AppleSvg":
      return AppleSvg();
    case "SmallBottleSvg":
      return SmallBottleSvg();
    case "TallBottleSvg":
      return TallBottleSvg();
    default:
      return null;
  }
};

export const returnDate = (dateStr) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(dateStr);
  let dateSuffix = "th";
  let dateVal = +date.getDate();

  if (dateVal == 1) dateSuffix = "st";
  else if (dateVal == 2) dateSuffix = "nd";
  else if (dateVal == 3) dateSuffix = "rd";

  const timeStamp = `Last Calculated on ${date.getDate()}${dateSuffix} ${
    months[date.getMonth()]
  }, ${date.getFullYear()}`;

  return timeStamp;
};
