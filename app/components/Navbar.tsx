import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import { BackButton } from "./BackButton";
import Link from "next/link";

type Props = { withBackButton?: boolean; searchOption?: boolean };

const Navbar = ({ withBackButton, searchOption = true }: Props) => {
  return (
    <div className="flex justify-between py-2">
      <div>
        {withBackButton ? (
          <BackButton />
        ) : (
          <IconButton>
            <MenuIcon className="text-slate-600" />
          </IconButton>
        )}
      </div>
      {/* <div className="font-bold text-2xl text-blue-600">ACB Store</div> */}
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
  );
};

export { Navbar };
