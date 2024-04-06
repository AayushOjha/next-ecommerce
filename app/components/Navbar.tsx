"use client";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import { BackButton } from "./BackButton";
import Link from "next/link";
import { MenuSidebar } from "./MenuSidebar";
import { categoriesApi } from "../utils/api/categories";

type Props = { withBackButton?: boolean; searchOption?: boolean };

const Navbar = ({ withBackButton, searchOption = true }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [cats, setCats] = useState<string[]>([]);

  useEffect(() => {
    categoriesApi.list().then((data) => {
      setCats(data);
    });
  }, []);

  return (
    <>
      <div className="flex justify-between py-2">
        <div>
          {withBackButton ? (
            <BackButton />
          ) : (
            <IconButton
              onClick={() => {
                setShowMenu(true);
              }}
            >
              <MenuIcon className="text-slate-600" />
            </IconButton>
          )}
        </div>
        <div>
          <IconButton>
            <ShoppingCartIcon className="text-slate-600" />
          </IconButton>
          {searchOption ? (
            <Link href={"/search"}>
              <SearchIcon className="text-slate-600" />
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
      <MenuSidebar
        visible={showMenu}
        onClose={() => {
          setShowMenu(false);
        }}
        cats={cats}
      />
    </>
  );
};

export { Navbar };
