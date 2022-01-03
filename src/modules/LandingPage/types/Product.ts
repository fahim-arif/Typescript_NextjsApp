export interface ProductCreate {
  title?: string;
  image?: ImageTypes;
  description?: string;
  rating?: number;
  sold?: number;
  price?: number;
  quantity?: number;
  categories?: CategoryTypes;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
}
export interface ProductContent {
  id?: number;
  title?: string;
  image?: ImageTypes;
  description?: string;
  rating?: number;
  sold?: number;
  price?: number;
  quantity?: number;
  categories?: CategoryTypes;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
}

export interface ProductGet  {
  data: {
    id?: number;
    attributes: ProductContent;
  }[];
}

export interface Pagination {
  page?: number;
  pageSize?: number;
  pageCount?: number;
  total?: number;
}

export interface CategoryTypes {
    data: {
    id?: number;
    attributes: {name: string};
  }[];
}

export interface ImageTypes {
    data: {
    id?: number;
    attributes: {url: string};
  };
}