import React from "react";
import Marquee from "react-fast-marquee";

function NFTs() {
  return (
    <section className=" py-8  backdrop-blur-lg  ">
      <div className=" container-wrapper ">
        <div className=" flex justify-evenly items-center ">
          <div className=" w-1/2">
            <h1 className=" text-white font-bold text-2xl py-4">Buy, store, send and swap tokens</h1>

            <p className=" text-white text-lg">
              Available as a browser extension and as a mobile app, Stone Wallet
              equips you with a key vault, secure login, token wallet, and token
              exchange—everything you need to manage your digital assets.
            </p>
          </div>
          <div className=" w-1/2">
            <img src="images/coin.png" alt="" className=" " />
          </div>
          <div></div>
        </div>

        <div className=" flex justify-evenly items-center ">
        <div className=" w-1/2">
            <img src="images/map.png" alt="" className=" " />
          </div>
          <div className=" w-1/2">
            <h1 className=" text-white font-bold text-2xl py-4">Buy, store, send and swap tokens</h1>

            <p className=" text-white text-lg">
              Available as a browser extension and as a mobile app, Stone Wallet
              equips you with a key vault, secure login, token wallet, and token
              exchange—everything you need to manage your digital assets.
            </p>
          </div>
        
          <div></div>
        </div>



        <div className=" flex justify-evenly items-center ">
          <div className=" w-1/2">
            <h1 className=" text-white font-bold text-2xl py-4">Buy, store, send and swap tokens</h1>

            <p className=" text-white text-lg">
              Available as a browser extension and as a mobile app, Stone Wallet
              equips you with a key vault, secure login, token wallet, and token
              exchange—everything you need to manage your digital assets.
            </p>
          </div>
          <div className=" w-1/2">
            <img src="images/guard.png" alt="" className=" " />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default NFTs;
