import { createContext } from "react";

export const MyContext = createContext((imageSize, isLarge) => {
  imageSize = isLarge ? 150 : 100;
});
