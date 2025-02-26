import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type shirtType = {
  id: number;
  title: string;
  description: string;
  team: string;
  sizes: string;
  src: string;
  inserted_at: Date;
  updated_at: Date;
};

export type teamsType = {
  id: number;
  team: string;
  inserted_at: Date;
  updated_at: Date;
};
