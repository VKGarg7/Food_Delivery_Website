import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="mt-24">
      <div className="cart-items">
        <div className="grid grid-cols-6 items-center text-gray-500 text-sm md:text-base">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="h-[1px] bg-gray-200 border-none" />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <React.Fragment key={index}>
                <div className="grid grid-cols-6 items-center my-2 text-black">
                  <img src={url+"/images/"+item.image} alt="" className="w-12" />
                  <p>{item.name}</p>
                  <p>Rs. {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Rs. {item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="cursor-pointer text-red-500"
                  >
                    X
                  </p>
                </div>
                <hr className="h-[1px] bg-gray-200 border-none" />
              </React.Fragment>
            );
          }
          return null;
        })}

        <div className="mt-20 flex flex-col lg:flex-row lg:justify-between lg:gap-20">
          <div className="flex-1 flex flex-col gap-5">
            <h2 className="text-lg font-semibold">Cart Total</h2>
            <div className="flex justify-between text-gray-600">
              <p>SubTotal</p>
              <p>Rs. {getTotalCartAmount()}</p>
            </div>
            <hr className="h-[1px] bg-gray-200 border-none" />
            <div className="flex justify-between text-gray-600">
              <p>Delivery Fee</p>
              <p>Rs. {getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr className="h-[1px] bg-gray-200 border-none" />
            <div className="flex justify-between font-semibold">
              <b>Total</b>
              <b>Rs. {getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</b>
            </div>
            <button
              onClick={() => navigate("/order")}
              className="bg-brown text-white w-full lg:w-1/3 py-3 rounded-md"
            >
              PROCEED TO CHECK
            </button>
          </div>

          <div className="flex-1">
            <p className="text-gray-600">
              If you have a promo code, Enter it here
            </p>
            <div className="mt-2 flex justify-between items-center bg-gray-200 rounded-md p-2">
              <input
                type="text"
                placeholder="Promo Code"
                className="bg-transparent outline-none px-2 flex-1"
              />
              <button className="bg-black text-white py-2 px-6 rounded-md">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
