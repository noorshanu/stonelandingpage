function About() {
  return (
    <section className=" relative container-wrapper" id="about">
      <div className=" backdrop-blur-lg   ">
        <h1> Trusted by</h1>
       <p>
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
