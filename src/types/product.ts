type IProductCategory = {
  id: number;
  name: string;
};

type IProductBusinessModel = {
  id: number;
  name: string;
};

export type IAddress = {
  country: {
    name: string;
  };
  city: {
    name: string;
  };
  street: string;
  house: string;
  zipCode: string;
  longitude: string;
  latitude: string;
};

export type IProductUser = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  sex: number;
  profilePicture: string;
  position: string;
};

export type IProductCompany = {
  name: string;
  logo: string;
  address: IAddress;
};

export type IProduct = {
  id: number;
  name: string;
  description: string;
  picture: string;
  type: {
    id: number;
    name: string;
  };
  categories: IProductCategory[];
  implementationEffortText: null;
  investmentEffort: string;
  trl: {
    id: number;
    name: string;
  };
  video: string;
  user: IUser;
  company: IProductCompany;
  businessModels: IProductBusinessModel[];
};
