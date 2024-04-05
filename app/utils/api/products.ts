import axios from "axios";
import { BackendUrl } from "../constants";
import { IProduct, IProductListPayload } from "../interfaces";

const baseUrl = `${BackendUrl}/products`;

const list = async (payload: IProductListPayload): Promise<IProduct[]> => {
  return new Promise(async (res, rej) => {
    try {
      let { data: products }: { data: IProduct[] } = await axios.get(
        `${baseUrl}`
      );
      // NOTE: this logic should be included in backend (DB query) but we do not have api with sort and search features.
      const { searchQuery, sortByPrice } = payload;

      // filtering
      if (searchQuery) {
        products = products.filter((product) => {
          const title = product.title.toLowerCase();
          return title.includes(searchQuery);
        });
      }

      // sorting (price)
      if (sortByPrice) {
        if (sortByPrice === "highToLow") {
          products = products.sort((a, b) => b.price - a.price);
        } else {
          products = products.sort((a, b) => a.price - b.price);
        }
      }

      res(products);
    } catch (error) {
      rej(error);
    }
  });
};

const index = async (id: string): Promise<IProduct> => {
  return new Promise(async (res, rej) => {
    try {
      const product = await axios.get(`${baseUrl}/${id}`);
      res(product.data);
    } catch (error) {
      rej(error);
    }
  });
};

const ProductsApi = { list, index };
export { ProductsApi };
