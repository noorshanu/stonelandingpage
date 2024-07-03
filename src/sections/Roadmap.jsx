import Title from "components/Title";

const Grid = ({ direction = "left" }) => {
  return (
    <div
      className={`absolute top-0 w-1/2 h-full -z-20 pointer-events-none select-none ${
        direction === "right" ? "right-0" : "left-0"
      }`}
    >
      <div
        className={`absolute top-0 ${
          direction === "right" ? "right-[-2px]" : "left-[-2px]"
        } w-full h-full opacity-50 z-10`}
        style={{
          backgroundImage:
            "linear-gradient(white 2px, transparent 2px),linear-gradient(90deg, white 2px, transparent 2px)",
          backgroundSize: "3rem 3rem",
        }}
      ></div>

      <div
        className={`absolute z-20 w-full h-full top-0 left-0 from-transparent to-primary ${
          direction === "right" ? "bg-gradient-to-l" : "bg-gradient-to-r"
        }`}
      ></div>
    </div>
  );
};

function Roadmap() {
  return (
    <section className="relative z-10 " id="road">
      <div className="container-wrapper mb-14">
        <div className=" flex items-center gap-2">
          <Title
            className="text-[#8431d6] mb-4 text-center"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
          >
            OUR ROADMAP
          </Title>

          <div className=" w-[60%] h-[1px] bg-[#376aa6]" />

          <p className=" font-dream text-black font-semibold text-xl">
            All Here
          </p>
        </div>

        {/* <img src="/images/roadmap.png" className="w-full" alt="" /> */}

        <div className="flex justify-between flex-col sm:flex-row gap-5 bg-[#9cd8e0a1] py-4  px-4 border-2 rounded-xl border-[#0244a5b3]"  data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine">
          <div className="bg-[#ffeeb9] py-5 px-5   rounded-md w-full mx-auto h-full sm:h-[300px] ">
            <div>
              <h1 className="font-dream text-[#8431d6]  text-center  text-lg mb-1">
                Phase 1
              </h1>
              {/* <h1 className="font-dream text-[#8431d6]  text-lg mb-2">
                The SolSon Beat Begins
              </h1> */}
            </div>
            <p className=" text-base font-popins font-normal lh-1_7">
              • PREPARE BRANDING CREATE SOCIALS
            </p>
            <p className=" text-base font-popins font-normal lh-1_7">
              • LAUNCH TOKEN.
            </p>
            <p className=" text-base font-popins font-normal lh-1_7">
              • BUILD TELEGRAM COMMUNITY.
            </p>
            <p className=" text-base font-popins font-normal lh-1_7">
              • DEXTOOLS/ DEXSCREENER/ BIRDSEYE SOCIALS UPDATES.
            </p>
            <p className=" text-base font-popins font-normal lh-1_7">
              • TRENDING/ X “TWITTER” RAIDS.
            </p>
            <p className=" text-base font-popins font-normal lh-1_7">
              • BLUE.TICK VERIFIED X “TWITTER”.
            </p>
            <p className=" text-base font-popins font-normal lh-1_7">
              • 1000 HOLDERS.
            </p>
          </div>

          <div className="bg-[#ffeeb9] py-5 px-5  rounded-md w-[100%] h-full sm:h-[300px]">
            <div>
              <h1 className="font-dream text-[#8431d6]  text-center  text-lg mb-1">
                Phase 2
              </h1>
              {/* <h1 className="font-dream text-[#8431d6]  text-lg mb-2">
                The Bongo Band Assembles
              </h1> */}
            </div>
            <p className=" text-base font-popins font-normal lh-1_7">
              • Expanding Community Reach.
            </p>
            <p className=" text-base font-popins font-normal lh-1_7">
              • Implementing Global Marketing Strategies.
            </p>
            <p className=" text-base font-popins font-normal lh-1_7">
              • Fast-track listing on CMC and CG .
            </p>
            <p className=" text-base font-popins font-normal lh-1_7">
              • Establish partnerships.
            </p>
          </div>
          <div className="bg-[#fbcbe6] py-5 px-5  rounded-md w-[100%] h-full sm:h-[300px]">
            <div>
              <h1 className="font-dream text-[#8431d6]  text-center  text-lg mb-1">
                Phase 3
              </h1>
              {/* <h1 className="font-dream text-[#8431d6] text-center text-lg mb-2">
                Bongo's Worldwide Tour
              </h1> */}
            </div>
            <p className=" text-base font-popins font-normal lh-1_7">
              • Launch new features. .
            </p>
            <p className=" text-base font-popins font-normal lh-1_7">
              • Pursuing New DEX & CEX Listings.
            </p>
            <p className=" text-base font-popins font-normal lh-1_7">
              • Execute global marketing strategies.
            </p>
            <p className=" text-base font-popins font-normal lh-1_7">
              • Form additional partnerships .
            </p>
            <p className=" text-base font-popins font-normal lh-1_7">
              • Further development{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
