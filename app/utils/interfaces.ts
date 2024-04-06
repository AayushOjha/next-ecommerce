export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IProductListPayload {
  sortByPrice?: "highToLow" | "lowToHigh";
  searchQuery?: string;
}

export interface IAppSlice {
  cart: IProduct[];
}
