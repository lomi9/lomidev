import { ChevronsLeft, ChevronsRight } from "lucide-react";

const Sentance = () => {
  return (
    <div className="sentance bg-transparent flex flex-wrap w-full justify-center items-center pt-[10rem] pb-[10rem]  px-4 md:px-12 lg:px-18">
      <ChevronsLeft />
      <h4 className="text-[3rem] px-12 antialiased font-bold text-gray-600">L&#39;art de créer avec passion</h4>
      <ChevronsRight/>
    </div>
  );
};

export default Sentance
