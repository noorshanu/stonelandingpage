function About() {
  return (
    <section className=" relative container-wrapper" id="about">
      <div className=" backdrop-blur-lg   ">
        <h1 className=" text-5xl font-bold text-center py-6"> Trusted by</h1>
       <p className=" mt-6 text-base text-center pb-12">
       Stone wallet is the leading self-custodial wallet. The safe and simple way to access blockchain applications and web3. Trusted by millions of users worldwide.
       </p>


       <div className=" grid grid-cols-2 sm:grid-cols-4 justify-evenly gap-4">

        <img src="images/card.png" alt="" />
        <img src="images/card.png" alt="" />
        <img src="images/card.png" alt="" />
        <img src="images/card.png" alt="" />
        <img src="images/card.png" alt="" />
        <img src="images/card.png" alt="" />
        <img src="images/card.png" alt="" />
        <img src="images/card.png" alt="" />

       </div>
      </div>
    </section>
  );
}

export default About;
