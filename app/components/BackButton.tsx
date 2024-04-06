"use client";

import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <>
      <IconButton
        onClick={() => {
          router.back();
        }}
      >
        <ArrowBackIcon className="text-slate-600" />
      </IconButton>
    </>
  );
};

export { BackButton };
