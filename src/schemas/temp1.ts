import Joi from "joi";

const job = Joi.object({
  startYear: Joi.number().required().min(1950).max(new Date().getFullYear()),
  endYear: Joi.number().required().min(1950).max(new Date().getFullYear()),
  title: Joi.string().required().max(30).min(4),
  position: Joi.string().required().max(30).min(4),
  company: Joi.string().required().max(30).min(4),
});

const temp1 = Joi.object({
  firstName: Joi.string().required().max(12).min(2),
  surname: Joi.string().required().max(12).min(2),
  title: Joi.string().required().max(30).min(4),
  address: Joi.string().required().max(40).min(4),
  street: Joi.string().required().max(30).min(5),
  city: Joi.string().required().max(23).min(3),
  phone: Joi.string().required().max(20).min(6),
  zipCode: Joi.number().required().max(Math.pow(10,9)).min(Math.pow(10,4)),
  email: Joi.string().required().email(),
  // linkedIn: string().required().min(16).max(50),
  profile: Joi.string().required().min(50).max(600),
  workExperience: Joi.array()
    .items(job.required(), job.required(), job.required())
    .length(3)
    .required()
    .max(3),
  education: Joi.object({
    name: Joi.string().required().max(30).min(5),
    city: Joi.string().required().max(23).min(5),
    state: Joi.string().required().max(23).min(5),
    summary: Joi.string().required().max(120).min(5),
  }).required(),
  workSummary: Joi.string().required().max(400).min(20),
  skills: Joi.array()
    .items(Joi.string().required(), Joi.string().required(), Joi.string().required())
    .required(),
  communicationExperience: Joi.string().required().max(400).min(20),
  leadershipExperience: Joi.string().required().max(400).min(20),
  references: Joi.string().required().max(23).min(5)
});

export default temp1;
