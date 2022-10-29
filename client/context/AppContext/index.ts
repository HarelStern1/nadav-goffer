import { Data } from "../../sections/Hero";

export interface AppContextType {
  language: keyof Data;
  setLanguage: (arg: string) => void;
  changeLanguage: (arg: string) => void;
}
