
import Hero from "@/components/Hero";
import LinksSection from "@/components/LinksSection";
import Presentation from "@/components/Presentation";
import WhyUs from "@/components/WhyUs";
import Sentance from "@/components/ui/Sentance";


const Homepage = () => {

  return (
<>
    <section className="homePage-hero pt-28 md:pt-24 lg:pt-28 w-full flex flex-wrap lg:flex-row px-4 md:px-12 lg:px-18 ">
      <Hero/>
    </section>
    <section className="homePage-presentation bg-transparent max-w-[1700px] flex flex-wrap justify-center w-full">
      <Presentation/>
    </section>
    <section className="hidden homePage-sentance bg-transparen max-w-[1700px] flex-wrap justify-center w-full">
      <Sentance/>
    </section>
    <section className="hidden homePage-links bg-transparen max-w-[1700px] flex-wrap justify-center w-full">
      <LinksSection/>
    </section>
    <section className="homePage-WhyUs pt-20 bg-transparen max-w-[1700px] flex flex-wrap justify-center w-full">
      <WhyUs/>
    </section>
</>
  )
  
};

export default Homepage;
