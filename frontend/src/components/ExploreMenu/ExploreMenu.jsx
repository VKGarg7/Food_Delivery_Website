// import React from "react";
// import { menu_list } from "../../assets/assets";

// const ExploreMenu = ({ category, setCategory }) => {
//   return (
//     <div className="flex flex-col gap-5" id="explore-menu">
//       <h1 className="text-[30px] font-medium text-[#333]">Explore our menu</h1>
//       <p className="max-w-[60%] text-[#808080]">
//         Choose from a diverse menu featuring a delectable array of dishes. Our
//         mission is to satisfy your cravings and elevate your dining experience,
//         one delicious meal at a time.
//       </p>
//       <div
//         className="flex justify-between items-center gap-[30px] text-center my-5 overflow-x-scroll [::-webkit-scrollbar]:hidden [scrollbar-width:none]"
//       >
//         {menu_list.map((item, index) => {
//           return (
//             <div
//               key={index}
//               className="flex flex-col items-center"
//               onClick={() =>
//                 setCategory((prev) =>
//                   prev === item.menu_name ? "All" : item.menu_name
//                 )
//               }
//             >
//               <img
//                 className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition duration-200 ${
//                   category === item.menu_name ? "border-4 border-brown p-1" : ""
//                 }`}
//                 src={item.menu_image}
//                 alt=""
//               />
//               <p className="mt-2 text-[#747474] text-[max(1.4vw,16px)] cursor-pointer">
//                 {item.menu_name}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//       <hr className="my-2 h-[2px] bg-[#e2e2e2] border-none" />
//     </div>
//   );
// };

// export default ExploreMenu;


import React from "react";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5" id="explore-menu">
      <h1 className="text-[30px] font-medium text-gray-800">Explore our menu</h1>
      <p className="text-gray-500 max-w-[60%] md:max-w-full md:text-sm">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="flex justify-between items-center gap-8 text-center my-5 overflow-x-scroll scrollbar-hide">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            className="flex flex-col items-center"
          >
            <img
              className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition-all duration-200 ${
                category === item.menu_name ? "border-[4px] border-brown p-0.5" : ""
              }`}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p className="mt-2 text-gray-500 text-[max(1.4vw,16px)] cursor-pointer">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
      <hr className="my-2 h-[2px] bg-gray-300 border-none" />
    </div>
  );
};

export default ExploreMenu;
