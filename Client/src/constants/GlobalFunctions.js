export const RegexPass = new RegExp(
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#?&()])[A-Za-z\d@$!%#?&()]{6,}$/
);
export const RegexEmail = new RegExp(/\S+@\S+\.\S+/);
