import Hero from "@/components/Hero";
import Services from "@/components/Services";


const Homepage = () => {

  return (
<>
    <div className="homePage-hero h-screen pt-28 md:pt-24 lg:pt-28 w-full flex flex-wrap lg:flex-row px-4 md:px-12 lg:px-18 ">
    <Hero/>
    </div>
    <div className="homePage-services pt-28 md:pt-24 lg:pt-28 w-full flex flex-wrap px-4 md:px-12 lg:px-18">
    <Services/>
    </div>
</>
  )
  
};

export default Homepage;
