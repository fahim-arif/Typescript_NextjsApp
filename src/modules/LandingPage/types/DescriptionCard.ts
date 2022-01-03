import { ImageTypes } from "./Product";

export type DescriptionCardContent = {
  id?: string;
  title?:string;
  content?: string;
  image?: ImageTypes
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
};

export type GetDescriptionCard = {
    data: {
    id?: number;
    attributes: DescriptionCardContent;
  }[];
}