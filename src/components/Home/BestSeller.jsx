import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../../context/shopContext";
import Title from "../UI/Title";
import ProudctItem from "../UI/ProductItem";

const BestSeller = () => {
  const { products } = useContext(shopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestSellers = products.filter((item) => item.bestseller);
    setBestSeller(bestSellers.slice(0, 5));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="BEST" text2="SELLER" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          explicabo consequuntur.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((proudctItem) => (
          <ProudctItem
            key={proudctItem._id}
            id={proudctItem._id}
            name={proudctItem.name}
            price={proudctItem.price}
            image={proudctItem.image}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
