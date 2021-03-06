export type BannerContent = {
  id?: string;
  title?: string;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
};

export type GetBannerContent = {
  data: {
    attributes: BannerContent;
  };
};
