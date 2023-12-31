export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
  Experience = "experience",
  CV = "cv",
}

export interface SkillsType {
  title: string;
  type?: string;
}

export interface ClassType {
  name: string;
  deploy?: string;
  git: string;
  description: string;
  image: string;
}

export interface workingPlace {
  name: string;
  dateStart: string;
  dateEnd: string | null;
  responsibilitiesRus: string[];
  responsibilitiesEng: string[];
}
