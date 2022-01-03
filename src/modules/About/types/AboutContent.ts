export type AboutSection = {
  title: string;
  subtitle: string;
  body: string;
};

export type AboutContent = {
  additional_information: string;
  Image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  sections: AboutSection[];
};

export type AboutContentGet = {
  data: {
    attributes: AboutContent;
  };
};
