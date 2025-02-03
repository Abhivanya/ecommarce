import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

export const shopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_charge = 10;
  const value = { products, currency, delivery_charge };
  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
};

export default ShopContextProvider;
