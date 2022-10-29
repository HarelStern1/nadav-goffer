import { Data } from "../../sections/Hero";

export interface AppContextType {
  language: string;
  setLanguage: (arg: string) => void;
  changeLanguage: (arg: string) => void;
}
