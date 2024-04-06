import React from "react";
import { IProduct } from "../utils/interfaces";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Image from "next/image";
import { IconButton } from "@mui/material";
import Link from "next/link";

type Props = {
  product: IProduct;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="border shadow-md p-1 rounded-md flex flex-col gap-3 md:gap-5">
        <div className="relative h-52">
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="p-1">
          <div className="truncate font-medium mb-1">{product.title}</div>
          <div className="flex justify-between">
            <div>
              <div className="text-gray-600">₹{product.price}</div>
              <div className="text-sm font-medium text-gray-600">
                {product.rating.rate} {`(${product.rating.count})`}
              </div>
            </div>
            <IconButton>
              <FavoriteBorderIcon className="text-red-600" />
            </IconButton>
          </div>
        </div>
      </div>
    </Link>
  );
};

export { ProductCard };
