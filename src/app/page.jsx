import Image from "next/image";
import heroImage from "../../public/62608.jpg"

const Homepage = () => {

  return (

    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
      {/* IMAGE CONTAINER*/}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src={heroImage} alt="Illustration" fill className="object-contain"></Image>
      </div>
      {/* TEXT CONTAINER*/}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold">LOMI WEB - Développeuse web - Créatrice de sites web</h1>
        {/* DESC */}
        <p className="md:text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, quod vero incidunt natus eius ullam expedita! In consectetur minima dolor impedit cumque maxime enim eum amet odio perspiciatis, earum excepturi!</p>
        {/* BUTTONS */}
        <div className="flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">Tarifs</button>
          <button className="p-4 rounded-lg ring-1 ring-black">Demander un devis</button>
        </div>

      </div>

    </div>
  )
  
};

export default Homepage;
