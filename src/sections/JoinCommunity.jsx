import { FaFacebookF, FaDiscord, FaInstagram } from "react-icons/fa";

function JoinCommunity() {
  return (
    <section className="pt-4 mt-4 bg-m2 " id="contact">
      <div className="  relative z-10 overflow-hidden container-wrapper">
        <img src="images/logo.png" alt="" className=" mx-auto my-3  sm:my-8" />
        <div className=" grid grid-cols-2 sm:grid-cols-3 gap-4 justify-evenly">
          <div>
            <h1 className=" text-[#9DC2F9] font-bold text-xl ">LEARN MORE</h1>

            <div className=" flex flex-col gap-2">
              <a href="/">About</a>

              <a href="/">About</a>

              <a href="/">Developer Docs</a>

              <a href="/">Download</a>
              <a href="/">Stone Wallet Institutional</a>
              <a href="/">News</a>
              <a href="/">Security</a>
            </div>
          </div>
          <div>
            <h1 className=" text-[#9DC2F9] font-bold text-xl ">GET INVOLVED</h1>

            <div className=" flex flex-col gap-2">
              <a href="/">GitHub</a>

              <a href="/">GitCoin</a>

              <a href="/">Open Positions</a>

              <a href="/">Swag Shop</a>
              <a href="/">Press & Partnerships</a>
              
            </div>
          </div>
          <div>
            <h1 className=" text-[#9DC2F9] font-bold text-xl ">LEGAL </h1>
            <div className=" flex flex-col gap-2">
              <a href="/">Privacy Policy</a>

              <a href="/">Terms of Use</a>

              <a href="/">Contributor License Agreement</a>

              <a href="/">Site Map</a>
           
            </div>
          </div>
        </div>
        <p className=" text-center text-sm py-8">
          ©2024 Stone Wallet All rights reserved
        </p>
      </div>
    </section>
  );
}

export default JoinCommunity;
