import { Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/CloseRounded";
import React from "react";
import Link from "next/link";

type Props = {
  visible: boolean;
  onClose: () => void;
  cats: string[];
};

const MenuSidebar = ({ visible, onClose, cats }: Props) => {
  return (
    <>
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            "&::-webkit-scrollbar": {
              display: "none",
            },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          },
        }}
        anchor="left"
        open={visible}
        onClose={onClose}
      >
        <nav className="flex min-w-[300px]">
          <div className="z-10 p-3 md:p-5 flex-col bg-white w-full justify-evenly items-center sm:w-[400px]">
            <div className="flex items-center justify-end">
              <div onClick={() => onClose()}>
                <CloseIcon className="text-zinc-600" />
              </div>
            </div>
            <div className="mt-5">
              <Link href={`/`}>
                <div className="mb-3 font-semibold">Home</div>
              </Link>
              <div className="border-b border-gray-200 text-[15px] text-zinc-600 pb-[7px]">
                Categories
              </div>
              <ul className="flex flex-col gap-2 mt-2 text-sm">
                {cats.map((cat) => {
                  return (
                    <li key={cat}>
                      <Link href={`/categories/${cat}`}>
                        {cat.toUpperCase()}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </Drawer>
    </>
  );
};

export { MenuSidebar };
