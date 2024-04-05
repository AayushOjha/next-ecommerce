import axios from "axios";
import { BackendUrl } from "../constants";
import { IProduct } from "../interfaces";

const list = async (): Promise<string[]> => {
  return new Promise(async (res, rej) => {
    try {
      const categories = await axios.get(`${BackendUrl}/products/categories`);
      res(categories.data);
    } catch (error) {
      console.error(error);
      rej(error);
    }
  });
};

const getCatProducts = async (cat: string): Promise<IProduct[]> => {
  return new Promise(async (res, rej) => {
    try {
      const products = await axios.get(
        `${BackendUrl}/products/category/${cat}`
      );
      res(products.data);
    } catch (error) {
      rej(error);
    }
  });
};

const categoriesApi = { list, getCatProducts };
export { categoriesApi };
