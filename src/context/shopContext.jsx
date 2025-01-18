import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

export const shopConext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_charge = 10;
  const value = { products, currency, delivery_charge };
  return <shopConext.Provider value={value}>{children}</shopConext.Provider>;
};

export default ShopContextProvider;
