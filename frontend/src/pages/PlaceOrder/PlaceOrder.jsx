import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="flex items-start justify-between gap-12 mt-16">
      <div className="w-full max-w-[30%]">
        <p className="text-2xl font-semibold mb-12">Delivery Information</p>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-2 border border-gray-300 rounded outline-brown"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-2 border border-gray-300 rounded outline-brown"
          />
        </div>

        <input
          type="email"
          placeholder="Email address"
          className="w-full p-2 mb-4 border border-gray-300 rounded outline-brown"
        />
        <input
          type="text"
          placeholder="Street"
          className="w-full p-2 mb-4 border border-gray-300 rounded outline-brown"
        />

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="City"
            className="w-full p-2 border border-gray-300 rounded outline-brown"
          />
          <input
            type="text"
            placeholder="State"
            className="w-full p-2 border border-gray-300 rounded outline-brown"
          />
        </div>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Zip code"
            className="w-full p-2 border border-gray-300 rounded outline-brown"
          />
          <input
            type="text"
            placeholder="Country"
            className="w-full p-2 border border-gray-300 rounded outline-brown"
          />
        </div>

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full p-2 mb-4 border border-gray-300 rounded outline-brown"
        />
      </div>

      <div className="w-full max-w-[40%]">
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-bold">Cart Total</h1>
          <div className="flex justify-between text-gray-600">
            <p>SubTotal</p>
            <p>Rs. {getTotalCartAmount()}</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-gray-600">
            <p>Delivery Fee</p>
            <p>Rs. {getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-black font-bold">
            <p>Total</p>
            <p>Rs. {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
          </div>
          <button className="mt-6 px-6 py-3 bg-brown text-white rounded shadow hover:bg-brown-dark transition">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
