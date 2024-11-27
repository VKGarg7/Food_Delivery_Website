import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="w-full mx-auto rounded-lg shadow-md transition duration-300 animate-fadeIn">
      <div className="relative">
        <img src={image} alt="" className="w-full rounded-t-lg" />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            alt=""
            className="w-9 absolute bottom-4 right-4 cursor-pointer rounded-full"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="absolute bottom-4 right-4 flex items-center gap-2 px-2 py-1 bg-white rounded-full">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
              className="w-7 cursor-pointer"
            />
            <p className="text-sm font-medium">{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
              className="w-7 cursor-pointer"
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <p className="text-lg font-semibold">{name}</p>
          <img src={assets.rating_starts} alt="" className="w-16" />
        </div>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-xl font-medium text-brown-600 mt-2">Rs. {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
