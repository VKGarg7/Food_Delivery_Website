// // import React from "react";
// // import "./Footer.css";
// // import { assets } from "../../assets/assets";

// // const Footer = () => {
// //   return (
// //     <div className="footer" id="footer">
// //       <div className="footer-content">
// //         <div className="footer-content-left">
// //           <img src={assets.logo} alt="" />
// //           <p>
// //             Lorem ipsum dolor sit amet consectetur adipisicing elit.
// //             Voluptatibus repudiandae architecto consequuntur exercitationem
// //             ullam possimus deserunt magni, placeat porro quod!
// //           </p>
// //           <div className="footer_social-icons">
// //             <img src={assets.facebook_icon} alt="" />
// //             <img src={assets.twitter_icon} alt="" />
// //             <img src={assets.linkedin_icon} alt="" />
// //           </div>
// //         </div>
// //         <div className="footer-content-center">
// //           <h2>COMPANY</h2>
// //           <ul>
// //             <li>Home</li>
// //             <li>About us</li>
// //             <li>Delivery</li>
// //             <li>Privacy policy</li>
// //           </ul>
// //         </div>
// //         <div className="footer-content-right">
// //           <h2>GET IN TOUCH</h2>
// //           <ul>
// //             <li>+91-7009674057</li>
// //             <li>14garg04@gmail.com</li>
// //           </ul>
// //         </div>
// //       </div>
// //       <hr />
// //       <p className="footer-copyright">
// //         Copyright 2024 @PoojaBakery.com - All Rights Reserved.
// //       </p>
// //     </div>
// //   );
// // };

// // export default Footer;


// import React from "react";
// import { assets } from "../../assets/assets";

// const Footer = () => {
//   return (
//     <div className="text-gray-300 bg-gray-800 flex flex-col items-center gap-5 px-[8vw] pt-20 pb-5 mt-20" id="footer">
//       <div className="w-full grid grid-cols-[2fr_1fr_1fr] gap-20">
//         <div className="flex flex-col items-start gap-5">
//           <img src={assets.logo} alt="Logo" />
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Voluptatibus repudiandae architecto consequuntur exercitationem
//             ullam possimus deserunt magni, placeat porro quod!
//           </p>
//           <div className="flex gap-4">
//             <img src={assets.facebook_icon} alt="Facebook" className="w-10" />
//             <img src={assets.twitter_icon} alt="Twitter" className="w-10" />
//             <img src={assets.linkedin_icon} alt="LinkedIn" className="w-10" />
//           </div>
//         </div>
//         <div className="flex flex-col items-start gap-5">
//           <h2 className="text-white">COMPANY</h2>
//           <ul className="flex flex-col gap-2">
//             <li>Home</li>
//             <li>About us</li>
//             <li>Delivery</li>
//             <li>Privacy policy</li>
//           </ul>
//         </div>
//         <div className="flex flex-col items-start gap-5">
//           <h2 className="text-white">GET IN TOUCH</h2>
//           <ul className="flex flex-col gap-2">
//             <li>+91-7009674057</li>
//             <li>14garg04@gmail.com</li>
//           </ul>
//         </div>
//       </div>
//       <hr className="w-full h-[2px] bg-gray-600 border-none my-5" />
//       <p className="text-center">
//         Copyright 2024 @PoojaBakery.com - All Rights Reserved.
//       </p>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-gray-300 flex flex-col items-center gap-5 px-[8vw] py-5 mt-24 pt-20" id="footer">
      <div className="w-full grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-20">
        {/* Left Section */}
        <div className="flex flex-col items-start gap-5">
          <img src={assets.logo} alt="Logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus repudiandae architecto consequuntur exercitationem
            ullam possimus deserunt magni, placeat porro quod!
          </p>
          <div className="flex gap-4">
            <img src={assets.facebook_icon} alt="Facebook" className="w-10" />
            <img src={assets.twitter_icon} alt="Twitter" className="w-10" />
            <img src={assets.linkedin_icon} alt="LinkedIn" className="w-10" />
          </div>
        </div>
        {/* Center Section */}
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-white text-xl">COMPANY</h2>
          <ul className="space-y-2">
            <li className="list-none">Home</li>
            <li className="list-none">About us</li>
            <li className="list-none">Delivery</li>
            <li className="list-none">Privacy policy</li>
          </ul>
        </div>
        {/* Right Section */}
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-white text-xl">GET IN TOUCH</h2>
          <ul className="space-y-2">
            <li className="list-none">+91-7009674057</li>
            <li className="list-none">14garg04@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full border-gray-600 my-5" />
      <p className="text-center text-gray-400">
        Copyright 2024 @PoojaBakery.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
