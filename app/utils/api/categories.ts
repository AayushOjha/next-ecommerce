import axios from "axios";
import { BackendUrl } from "../constants";
import { IProduct } from "../interfaces";

const list = async (): Promise<string[]> => {
  return new Promise(async (res, rej) => {
    try {
      const categories: string[] = await axios(`${BackendUrl}/categories`);
      res(categories);
    } catch (error) {
      rej(error);
    }
  });
};

const getCatProducts = async (cat: string): Promise<IProduct[]> => {
  return new Promise(async (res, rej) => {
    try {
      const products: IProduct[] = await axios(`${BackendUrl}/category/${cat}`);
      res(products);
    } catch (error) {
      rej(error);
    }
  });
};

const categoriesApi = { list, getCatProducts };
export { categoriesApi };
