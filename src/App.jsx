import Navbar from "components/Navbar";
import About from "sections/About";
import Hero from "sections/Hero";
import JoinCommunity from "sections/JoinCommunity";
import NFTs from "sections/NFTs";
import NewsLetter from "sections/NewsLetter";
import Roadmap from "sections/Roadmap";
import Tokenomics from "sections/Tokenomics";


function App() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <div className="relative z-10">
          <div className=" w-full z-50">
            <Navbar />
          </div>

          <div className=" ">
    
            <Hero />
          </div>
          <div className=" mt-3">
          <NFTs/>

        </div>
      
        </div>

        <div className="my-4" id="about" >
          <About />
        </div>
      

    
        
     


        <div>
          <NewsLetter/>
        </div>
      </main>

      <div id="contact">
        <JoinCommunity />
      </div>
    </div>
  );
}

export default App;
