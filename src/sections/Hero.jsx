function Hero() {
  return (
    <section className="relative z-10 overflow-hidden  h-full  sm:h-[100%] mt-4">
      <div className="container-wrapper    justify-center mx-auto  pb-12 items-center ">
        <h1 className=" text-white text-4xl text-center font-bold">A crypto wallet & gateway to blockchain apps</h1>
        <p className=" text-base font-medium text-center text-white py-1">
          Start exploring blockchain applications in seconds. Trusted by over 30
          million users worldwide.
        </p>
        <img src="images/hero.png" alt="" className=" py-4 mx-auto" />
      </div>
      <div className="flex justify-center   w-full   mx-auto py-2">
        <a
          href="/"
          className=" text-center  text-xl flex items-center gap-4 bg-[#376aa6] px-2 py-1 rounded-full border-2 "
        >
          Downnload for{" "}
          <img src="images/crome.png" alt="" className=" h-[30px]" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
