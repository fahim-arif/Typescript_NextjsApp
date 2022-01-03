import { ImageTypes } from "./Product";

export type ImageContent = {
  id?: string;
  title?: string;
  subtitle?: string;
  image?: ImageTypes;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
};

export type GetImageContent = {
  data: {
    id?: number;
    attributes: ImageContent; 
  }[];
};