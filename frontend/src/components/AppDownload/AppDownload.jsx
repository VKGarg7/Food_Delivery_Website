import React from 'react';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className="mx-auto mt-24 text-center text-lg font-medium" id="app-download">
      <p>
        For Better Experience Download <br /> Pooja Bakery App
      </p>
      <div className="flex justify-center gap-10 mt-10">
        <img
          src={assets.play_store}
          alt="Play Store"
          className="w-[30vmin] max-w-[180px] transition-transform duration-500 cursor-pointer hover:scale-105"
        />
        <img
          src={assets.app_store}
          alt="App Store"
          className="w-[30vmin] max-w-[180px] transition-transform duration-500 cursor-pointer hover:scale-105"
        />
      </div>
    </div>
  );
};

export default AppDownload;
