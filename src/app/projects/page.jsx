import HeroParallax from './components/HeroParallax';

const ProjectsPage = () => {
  const products = [
    { 
      id:"1",
      title: "Casa Marerio",
      link: "#",
      thumbnail: "/projects/casamarerio/casamarerio_screen_large.webp",
    },
    { 
      id:"2",
      title: "Casa Marerio",
      link: "#",
      thumbnail: "/projects/casamarerio/casamarerio_desktop_large.webp",
      
    },
    { 
      id:"3",
      title: "Casa Marerio",
      link: "#",
      thumbnail: "/projects/casamarerio/casamarerio_tab_large.webp",
      
    },
    { 
      id:"4",
      title: "Casa Marerio",
      link: "#",
      thumbnail: "/projects/casamarerio/casamarerio_mobile_large.webp",
    },
    { 
      id:"5",
      title: "Casa Marerio",
      link: "#",
      thumbnail: "/projects/casamarerio/casamarerio_outside_large.webp",
      
    },
    
    { title: "Halima Garden", link: "#", thumbnail: "/projects/halimagarden/halima_desktop_large.webp"  },
    { title: "Halima Garden", link: "#", thumbnail: "/projects/halimagarden/halima_tab_large.webp" },
    { title: "Halima Garden", link: "#", thumbnail: "/projects/halimagarden/halima_mobile_large.webp" },
    { title: "Halima Garden", link: "#", thumbnail: "/projects/halimagarden/halima_totebag_mockup_large.webp" },
    
    { title: "Project 10", link: "#", thumbnail: "/halima.webp"  },
    { title: "Project 11", link: "#", thumbnail: "/m-tech.webp" },
    { title: "Project 12", link: "#", thumbnail:"/bel-horizon.webp" },
    { title: "Project 13", link: "#", thumbnail: "/casamarerio.webp" },
    { title: "Project 14", link: "#", thumbnail: "/halima.webp"  },
    { title: "Project 15", link: "#", thumbnail: "/m-tech.webp" },
  ];

  return (
    <div className="parallax-container overflow-hidden">
      <HeroParallax products={products} />
      {/* Ajoutez le reste du contenu de votre page ici */}
    </div>
  );
};

export default ProjectsPage;
