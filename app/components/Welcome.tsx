import React from "react";

type Props = {};

const Welcome = (props: Props) => {
  return (
    <div className="mt-5 mb-11">
      <h2 className="text-center text-blue-600 text-xl font-bold tracking-wide mb-2">
        WELCOME TO ABC Store
      </h2>
      <div className="w-6/12 mx-auto bg-blue-600 h-[1px] mb-2" />
      <h3 className="text-center font-medium text-blue-600 text-[13px] leading-snug mb-3">
        One Stop Solution for Fashion
      </h3>

      <p className="text-center text-[15px] font-light md:w-8/12 md:mx-auto">
        {`Elevate your lifestyle with our curated collection of men's clothing,
        women's clothing, jewelery, electronics and more. Discover the joy of
        shopping conveniently from your fingertips.`}
      </p>
    </div>
  );
};

export { Welcome };
