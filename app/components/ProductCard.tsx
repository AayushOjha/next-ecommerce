import React from "react";
import { IProduct } from "../utils/interfaces";
import Image from "next/image";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { CartButton } from "./CartButton";

type Props = {
  product: IProduct;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="border shadow-md p-1 rounded-md flex flex-col gap-3 md:gap-5">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-52">
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Link>
      <div className="p-1">
        <Link href={`/products/${product.id}`}>
          <div className="truncate font-medium mb-1">{product.title}</div>
        </Link>
        <div className="flex justify-between">
          <div>
            <div className="text-gray-600">₹{product.price}</div>
            <div className="text-sm font-medium text-gray-600">
              {product.rating.rate} {`(${product.rating.count})`}
            </div>
          </div>
          <CartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
