import HeroParallax from './components/HeroParallax';

const ProjectsPage = () => {
  const products = [
    { title: "Project 1", link: "#", thumbnail: "/casamarerio.webp" },
    { title: "Project 2", link: "#", thumbnail: "/halima.webp" },
    { title: "Project 3", link: "#", thumbnail: "/m-tech.webp" },
    { title: "Project 4", link: "#", thumbnail: "/bel-horizon.webp" },
    { title: "Project 5", link: "#", thumbnail: "/casamarerio.webp" },
    { title: "Project 6", link: "#", thumbnail: "/halima.webp"  },
    { title: "Project 7", link: "#", thumbnail: "/m-tech.webp" },
    { title: "Project 8", link: "#", thumbnail: "/bel-horizon.webp" },
    { title: "Project 9", link: "#", thumbnail: "/casamarerio.webp" },
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
