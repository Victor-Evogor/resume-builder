interface Job {
  startYear: number;
  endYear: number;
  description: string;
  company: string;
}

interface Education {
  startMonth:
    | "january"
    | "february"
    | "match"
    | "april"
    | "may"
    | "june"
    | "july"
    | "august"
    | "september"
    | "october"
    | "november"
    | "december";
  endMonth:
    | "january"
    | "february"
    | "match"
    | "april"
    | "may"
    | "june"
    | "july"
    | "august"
    | "september"
    | "october"
    | "november"
    | "december";
  startYear: number;
  endYear: number;
}

interface Temp0 {
  firstName: string;
  surname: string;
  profile: string;
  phone: string,
  city: string,
  email: string,
  linkedIn: string,
  street: string,
  workExperience: Job[];
  education: Education[];
}

export default Temp0
