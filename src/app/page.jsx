
import Hero from "@/components/Hero";
import Presentation from "@/components/Presentation";


const Homepage = () => {

  return (
<>
    <div className="homePage-hero pt-28 md:pt-24 lg:pt-28 w-full flex flex-wrap lg:flex-row px-4 md:px-12 lg:px-18 ">
      <Hero/>
    </div>
    <div className="homePage-presentation bg-transparent max-w-[1700px] flex flex-wrap justify-center w-full">
      <Presentation/>
    <div className=" flex flex-col gap-16 items-center justify-center text-center">
      <p>Final div</p>
    </div>
    </div>
</>
  )
  
};

export default Homepage;
