import { ChevronsLeft, ChevronsRight } from "lucide-react";

const Sentance = () => {
  return (
    <div className="sentance bg-transparent flex wrap w-full justify-center items-center pt-[5rem] pb-[5rem]  sm:px-4 md:px-12 lg:px-18">
      <ChevronsLeft />
      <h4 className="text-[5vw] lg:text-[3rem] px-8 antialiased font-bold text-foreground">L&#39;art de créer avec passion</h4>
      <ChevronsRight/>
    </div>
  );
};

export default Sentance
