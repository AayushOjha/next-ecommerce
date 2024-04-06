"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IProduct, IStore } from "../utils/interfaces";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import { IconButton } from "@mui/material";
import {
  addProductToCart,
  removeProductFromCart,
} from "../utils/store/appSlice";

type Props = { product: IProduct };

const CartButton = ({ product }: Props) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: IStore) => state.app);
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    if (cart.find((item) => item.id === product.id)) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cart, product]);

  const handleClick = () => {
    if (inCart) {
      dispatch(removeProductFromCart(product.id));
    } else {
      dispatch(addProductToCart(product));
    }
  };
  return (
    <>
      <IconButton onClick={handleClick}>
        {inCart ? (
          <ShoppingCartCheckoutOutlinedIcon className="text-blue-600" />
        ) : (
          <AddShoppingCartOutlinedIcon className="text-blue-600" />
        )}
      </IconButton>
    </>
  );
};

export { CartButton };
