"use client" // --- for some reason got build error if not with "use client"

import { IError } from "@/types/types";
import { FC } from "react";


const Error: FC<IError> = ({ message }) => {
  return (
    <div>
      <h2>Error comment details</h2>
      <p>{message}</p>
    </div>
  );
};

export default Error;
