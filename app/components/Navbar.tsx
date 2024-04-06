import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import { BackButton } from "./BackButton";

type Props = { withBackButton?: boolean };

const Navbar = ({ withBackButton }: Props) => {
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
      </div>
    </div>
  );
};

export { Navbar };
