"use client";
import { Navbar } from "@/app/components/Navbar";
import { ProductCard } from "@/app/components/ProductCard";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IProduct, IProductListPayload } from "../utils/interfaces";
import SearchIcon from "@mui/icons-material/Search";
import { ProductsApi } from "../utils/api/products";
import { CircularProgress } from "@mui/material";
import { Suspense } from "react";
import QueryString from "qs";

function Main() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query") || undefined;
  const priceSort =
    (searchParams.get("price_sort") as IProductListPayload["sortByPrice"]) ||
    undefined;

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [_searchQuery, set_searchQuery] = useState(searchQuery);
  const [_priceSort, set_priceSort] = useState<
    IProductListPayload["sortByPrice"]
  >(priceSort || undefined);

  useEffect(() => {
    ProductsApi.list({ searchQuery, sortByPrice: priceSort })
      .then((data) => {
        setProducts(data);
      })
      .finally(() => {
        setLoading(false);
      });
    set_priceSort(priceSort);
    set_searchQuery(searchQuery);
  }, [searchQuery, priceSort]);

  const updatePageQuery = ({
    searchQuery,
    sortByPrice,
  }: IProductListPayload) => {
    const updatedSearchParams = QueryString.stringify({
      query: searchQuery,
      price_sort: sortByPrice,
    });

    router.push(pathname + "?" + updatedSearchParams);
  };

  if (loading) {
    return (
      <div className="w-fit mx-auto mt-20 md:mt-32">
        <CircularProgress />
      </div>
    );
  } else {
    return (
      <div className="global-page pb-10">
        <Navbar searchOption={false} />

        <div className="mb-3">
          <div className="border mb-1 rounded-md p-1.5 flex gap-1">
            <SearchIcon />
            <input
              type="text"
              placeholder="search here"
              className="outline-none flex-1"
              value={_searchQuery}
              onKeyDown={({ key }) => {
                if (key === "Enter") {
                  updatePageQuery({
                    searchQuery: _searchQuery,
                    sortByPrice: _priceSort,
                  });
                }
              }}
              onChange={({ target: { value } }) => {
                set_searchQuery(value);
              }}
            />
          </div>

          <div className="flex justify-end items-baseline gap-1">
            <p className="text-gray-600 text-sm font-medium">sort by:</p>
            <select
              className="outline-none text-sm font-thin italic text-gray-800"
              value={_priceSort || "null"}
              onChange={({ target: { value } }) => {
                if (value === "lowToHigh" || value === "highToLow") {
                  set_priceSort(value);
                  updatePageQuery({
                    searchQuery: _searchQuery,
                    sortByPrice: value,
                  });
                } else {
                  set_priceSort(undefined);
                  updatePageQuery({
                    searchQuery: _searchQuery,
                    sortByPrice: undefined,
                  });
                }
              }}
            >
              <option value={"null"}>none</option>
              <option value={"lowToHigh"}>price low to high</option>
              <option value={"highToLow"}>price high to low</option>
            </select>
          </div>
        </div>

        {products.length ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {products.map((prod) => {
              return (
                <div key={prod.id}>
                  <ProductCard product={prod} />
                </div>
              );
            })}
          </div>
        ) : (
          <h2>No product found</h2>
        )}
      </div>
    );
  }
}

export default function Page() {
  return (
    <Suspense>
      <Main />
    </Suspense>
  );
}
