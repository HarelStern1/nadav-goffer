import { type } from "os";
import { Data } from "../../sections/Hero";

export interface AppContextType {
  language: keyof Data;
  setLanguage: (arg: keyof Data) => void;
  changeLanguage: (arg: string) => void;
}

export type Language = "en" | "he";
