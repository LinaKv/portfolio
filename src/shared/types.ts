export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface SkillsType {
  title: string;
  type?: string;
}

export interface ClassType {
  name: string;
  description?: string | React.ReactNode;
  image: string;
}
