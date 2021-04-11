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
