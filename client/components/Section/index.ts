import { Children } from "../../utils/types";

export interface SectionProps {
  children?: Children;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundOpacity?: number;
  padding?: string;
  align?: string;
  justify?: string;
  column?: boolean;
  id?: string;
}
