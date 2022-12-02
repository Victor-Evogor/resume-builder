import Joi from "joi";

const jobExperience = Joi.object({
  startYear: Joi.number().required().min(1930).max(new Date().getFullYear()),
  endYear: Joi.number().required().min(1930).max(new Date().getFullYear()),
  jobTitle: Joi.string().required().min(3).max(40),
  company: Joi.string().required().min(3).max(40),
  summary: Joi.string().required().min(20).max(300),
});

const education = Joi.object({
  month: Joi.string()
    .required()
    .allow(
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
      "December"
    ),
  year: Joi.number().required().min(1930).max(new Date().getFullYear()),
  degree: Joi.string().required().min(3).max(40),
  school: Joi.string().required().min(3).max(40),
  summary: Joi.string().required().min(20).max(300),
});

const temp0 = Joi.object({
  firstName: Joi.string().required().min(2).max(15),
  surname: Joi.string().required().min(2).max(15),
  address: Joi.string().required().min(4).max(40),
  phone: Joi.string().required().min(4).max(20),
  email: Joi.string().email().required(),
  linkedin: Joi.string().required().min(10).max(60),
  twitter: Joi.string().required().min(5).max(60),
  blog: Joi.string().required().min(5).max(60),
  portfolio: Joi.string().required().min(5).max(60),
  bio: Joi.string().required().min(100).max(600),
  experience: Joi.array().required().items(jobExperience.required()).length(2),
  education: Joi.array().required().items(education.required()).length(2),
  skills: Joi.array()
    .required()
    .items(Joi.string().required())
    .length(5),
  activities: Joi.string().required().min(50).max(300),
});

export default temp0;
