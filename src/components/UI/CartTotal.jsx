import React, { useContext } from "react";
import { shopContext } from "../../context/shopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_charge, getCartAmount } = useContext(shopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTAL"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p className="">Subtotal</p>
          <p className="">
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {delivery_charge}.00
          </p>
        </div>
        <div className="flex justify-between">
          <p>Total</p>
          <p>
            {currency}{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_charge}.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
