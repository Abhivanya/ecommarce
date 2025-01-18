import React, { useContext, useEffect, useState } from "react";
import { shopConext } from "../../context/shopContext";
import Title from "../UI/Title";
import ProudctItem from "../UI/ProductItem";

const BestSeller = () => {
  const { products } = useContext(shopConext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    setBestSeller(products.filter((item) => item.bestseller));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="BEST" text2="SELLER" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          explicabo consequuntur porro voluptatibus quod alias laborum magnam
          hic repellendus corrupti.
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
