export interface NavContextType {
  active: number;
  setActive: (arg: number) => void;
  shadow: boolean;
}

export type Link = {
  id?: number;
  lang?: boolean;
  href: string;
  en: {
    title: string;
  };
  he: {
    title: string;
  };
};

export type Links = Link[];
