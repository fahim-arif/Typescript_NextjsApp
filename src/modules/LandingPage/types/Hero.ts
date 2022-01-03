export type GetHeroContent = {
  data: {
    id?: number;
    attributes: HeroContent;
  }[];
};

export type HeroContent = {
  title?: string;
  subtitle?: string;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
};
