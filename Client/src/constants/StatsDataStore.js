import {
  HeartMeterSvg,
  WheySvg,
  TreadMillSvg,
  WeightScale,
  AppleSvg,
  SmallBottleSvg,
  TallBottleSvg,
} from "./SVGs.jsx";

export const cardsData = [
  {
    id: 1,
    label: "Basal Metabolic Rate (BMR)",
    value: "1648.12",
    details: {
      title: "Basal Metabolic Rate (BMR)",
      info: [
        "Your BMR is the number of calories your organs need to function while you perform no activity whatsoever.",
        "You can think of it as the amount of energy you'd burn if you stayed in bed all day.",
      ],
      icon: HeartMeterSvg(),
    },
  },
  {
    id: 2,
    label: "Protein target",
    value: "99 g",
    details: {
      title: "Protein",
      info: [
        "Protein is one of the 3 main macro nutrients. It is the key to building muscle and losing bodyfat",
        "Protein and Carbs provide 4 calories per gram.",
        "Some sources of Protein are Meats like Chicken, beef, pork, turkey Eggs, Fish etc. Vegan sources include lentils, beans,Tofu, etc.",
      ],
      icon: WheySvg(),
    },
  },
  {
    id: 3,
    label: "Calories from protein",
    value: "396 kcal",
    details: {
      title: "Calories from protein",
      info: ["This is how many calories your protein target will have"],
      icon: WeightScale(),
    },
  },
  {
    id: 4,
    label: "Total Daily Energy expenditure (TDEE)",
    value: "2307 kcal",
    details: {
      title: "Total Daily Energy expenditure",
      info: [
        "Your TDEE is the amount of calories you burn in a single day.",
        "This number will vary depending on your activity level and life style",
      ],
      icon: TreadMillSvg(),
    },
  },
  {
    id: 5,
    label: "Fats target",
    value: "106 g",
    details: {
      title: "Fats",
      info: [
        "Healthy Fats are necessary to keeping your body healthy and performing in the best possible way",
        "Since Fats Provide 9 calories per gram, they must be kept in check.",
        "Some healthy sources are Omega-3, Peanut Butter, Walnuts, Olive Oil, etc",
      ],
      icon: SmallBottleSvg(),
    },
  },
  {
    id: 6,
    label: "Calories from Carbs & Fat ",
    value: "955 kcal",
    details: {
      title: "Carbs & Fat Calories",
      info: ["This is how many calories your fats and carbs target will have"],
      icon: WeightScale(),
    },
  },
  {
    id: 7,
    label: "Daily Calorie Goal",
    value: "2607 kcal",
    details: {
      title: "Daily Calorie Goal",
      info: [
        "This is how many calories you should aim to consume daily to progress towards your goal",
        "You may need to adjust this number after you make some progress, by increasing or decreasing your calories",
      ],
      icon: AppleSvg(),
    },
  },
  {
    id: 8,
    label: "Carbs target",
    value: "238 g",
    details: {
      title: "Carbohydrates",
      info: [
        "Healthy Fats are necessary to keeping your body healthy and performing in the best possible way",
        "Since Fats Provide 9 calories per gram, they must be kept in check, some healthy sources are Omega-3, Peanut Butter, Walnuts, Olive Oil, etc",
      ],
      icon: TallBottleSvg(),
    },
  },
  { id: 9, label: "Current Goal", value: "Muscle Gain" },
];
