export type DescriptionContent = {
  id?: string;
  title?: string;
  content1?: string;
  content2?: string;
  content3?: string;
  content4?: string;
  content5?: string;
  subtitle1?: string;
  subtitle2?: string;
  subtitle3?: string;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
};

export type GetDescription = {
    data: {
    id?: number;
    attributes: DescriptionContent;
  }[];
}