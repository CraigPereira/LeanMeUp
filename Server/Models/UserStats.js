const mongoose = require("mongoose");

//User Stats Schema & Model
const Schema = mongoose.Schema;

const userStatsSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user" },
    weight: Number,
    height: Number,
    heightUnit: String,
    bmi: Number,
    bmr: Number,
    proteinTarget: Number,
    calsFromProtein: Number,
    tdee: Number,
    fatsTarget: Number,
    calsFromFatsAndCarbs: Number,
    dailyCalsGoal: Number,
    carbsTarget: Number,
    currentGoal: String,
  },
  { timestamps: true }
);

const UserStats = mongoose.model("userStat", userStatsSchema);

module.exports = UserStats;
