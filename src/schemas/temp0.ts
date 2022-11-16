import Joi from "joi";

const job = Joi.object({
  startYear: Joi.number().required().min(1970).max(new Date().getFullYear()),
  endYear: Joi.number().required().min(1970).max(new Date().getFullYear()),
  title: Joi.string().required().min(4).max(20),
  description: Joi.string().required().min(20).max(300),
  company: Joi.string().required().min(5).max(15),
});

const education = Joi.object({
  startMonth: Joi.string()
    .valid(
      "january",
      "february",
      "match",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december"
    )
    .required(),
  endMonth: Joi.string()
    .valid(
      "january",
      "february",
      "match",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december"
    )
    .required(),
  startYear: Joi.number().required().min(1970).max(new Date().getFullYear()),
  endYear: Joi.number().required().min(1970).max(new Date().getFullYear()),
});

const temp0 = Joi.object({
  firstName: Joi.string().required().max(12).min(4),
  surname: Joi.string().required().max(12).min(4),
  street: Joi.string().required().max(30).min(5),
  city: Joi.string().required().max(23).min(5),
  phone: Joi.string().required().max(20).min(6),
  email: Joi.string().required().email(),
  linkedIn: Joi.string().required().min(16).max(50),
  profile: Joi.string().required().min(50).max(600),
  workExperience: Joi.array()
    .items(job.required(), job.required())
    .required()
    .max(3),
  education: Joi.array().items(education.required()).required().max(2),
});

export default temp0;
