export type GetHeroContent = {
  data: {
    attributes: HeroContent;
  };
};

export type HeroContent = {
  title?: string;
  subtitle?: string;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
};
