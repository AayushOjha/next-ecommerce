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
import { Badge, BadgeProps, styled } from "@mui/material";
import { useSelector } from "react-redux";
import { IStore } from "../utils/interfaces";

type Props = { withBackButton?: boolean; searchOption?: boolean };

export const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 1,
    top: 4,
    backgroundColor: "#2563eb",
    color: "#fff",
    padding: "0 4px",
    fontSize: "8px",
    minWidth: "16px",
    height: "16px",
  },
}));

const Navbar = ({ withBackButton, searchOption = true }: Props) => {
  const { cart } = useSelector((state: IStore) => state.app);

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
        <div className="flex items-center gap-2.5">
          <Link href={"/cart"}>
            <StyledBadge badgeContent={cart?.length || 0}>
              <ShoppingCartIcon className="text-slate-600" />
            </StyledBadge>
          </Link>
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
