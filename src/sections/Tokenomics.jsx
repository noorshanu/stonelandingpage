import Title from "components/Title";

function Tokenomics() {
  return (
    <section  id="token" className="container-wrapper rounded-2xl py-10 sm:py-14 px-4 sm:px-10 relative z-10">
   <div className=" flex items-center gap-2">

   <Title
        className="text-[#8431d6] mb-4 text-center"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
      >
        Tokenomics
      </Title>



      <div className=" w-[60%] h-[1px] bg-[#376aa6]" />

      <p className=" font-dream text-black font-semibold text-xl">
        All Here
      </p>
   </div>
      <div>
        <p className=" text-center bg-[#9cd8e0a1] font-bold text-base sm:text-2xl py-1 mt-2 mb-6 
         border-[#0244a5b3] border-2 rounded-full font-dream">Contract : Comingsoon</p>
      </div>
      {/* <div className=" flex flex-col sm:flex-row items-center justify-center w-full gap-8">
     <div className="bg-[#c6f2ff] my-5 py-5 px-3 rounded-md w-full white-shadow text-center font-semibold">
            <p className=" uppercase">Buy Tax = 0%</p>
            </div> 

            <div className="bg-[#ffcbdf] w-full my-5 py-5 px-3 rounded-md white-shadow text-center font-semibold">
              <p className=" uppercase">Sale tax = 3%</p>

            </div>
     </div> */}

      <div className="grid sm:grid-cols-2 gap-10 items-center bg-[#9cd8e0a1] py-4  px-4 border-2 rounded-xl border-[#0244a5b3]">
        <img
          src="/images/token.png"
          className="w-full rounded-full border-4  white-shadow border-[#0244a5b3]"
          alt=""
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
        />
        <div
          className=""
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
        >
          <div className="bg-[#7a3e28] my-5 py-5 px-3 rounded-md white-shadow text-center font-semibold border-[#0244a5b3] border-2 text-white">
            <p className=" uppercase">Total Supply = 1 Billion</p>
          </div>
          <div className="bg-[#7a3e28] my-5 py-5 px-3 rounded-md white-shadow text-center font-semibold  border-[#0244a5b3] border-2 text-white">
            <p className=" uppercase">Symbol = $PUGCOIN</p>
          </div>
          <div className="bg-[#7a3e28] my-5 py-5 px-3 rounded-md white-shadow text-center font-semibold  border-[#0244a5b3] border-2 text-white">
            <p className=" uppercase">Tax = 0%</p>
          </div>

          <div className="bg-[#7a3e28] my-5 py-5 px-3 rounded-md white-shadow text-center font-semibold  border-[#0244a5b3] border-2 text-white">
            <p className=" uppercase">Revoke mint </p>
          </div>
          <div className="bg-[#7a3e28] my-5 py-5 px-3 rounded-md white-shadow text-center font-semibold  border-[#0244a5b3] border-2 text-white">
            <p className=" uppercase">Revoke Authority</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
