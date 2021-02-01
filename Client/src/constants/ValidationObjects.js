import { RegexPass, RegexEmail } from "../constants/GlobalFunctions";

export const nameValidation = {
  required: "Name is Required",
  pattern: {
    value: /^[A-Za-z ]+$/,
    message: "Name must only contain alphabets",
  },
  minLength: {
    value: 2,
    message: "Name must be at least 2 characters long",
  },
  maxLength: {
    value: 64,
    message: "Name shouldn't be longer than 64 characters",
  },
};

export const passValidation = {
  required: "Password is Required",
  pattern: {
    value: RegexPass,
    message: "Include one letter, number and special character",
  },
  minLength: {
    value: 6,
    message: "Password must be at least 6 characters long",
  },
  maxLength: {
    value: 32,
    message: "Password shouldn't be longer than 32 characters",
  },
};

export const emailValidation = {
  required: "Email is Required",
  pattern: {
    value: RegexEmail,
    message: "Enter a valid email",
  },
};
