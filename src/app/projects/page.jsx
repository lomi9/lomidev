import ProjectShowcase from './components/ProjectShowcase';

const ProjectsPage = () => {
  const products = [
    { 
      id:"1",
      title: "Casa Marerio",
      link: "#",
      thumbnail: "/projects/casamarerio/casamarerio_screen_large.webp",
      images: [
        "/projects/casamarerio/casamarerio_screen_large.webp",
        "/projects/casamarerio/casamarerio_desktop_large.webp",
        "/projects/casamarerio/casamarerio_tab_large.webp",
        "/projects/casamarerio/casamarerio_mobile_large.webp",
        "/projects/casamarerio/casamarerio_outside_large.webp",
      ],
      offer: "Site web vitrine",
      prestations: [
        { id: 1, name: "Création de site web vitrine" },
        { id: 2, name: "Création de logo" },
        { id: 3, name: "Création de charte graphique" },
      ],
      description : "blablabla description",
    },
    { 
      id:"2",
      title: "Casa Marerio",
      link: "#",
      thumbnail: "/projects/casamarerio/casamarerio_desktop_large.webp",
      images: [
        "/projects/casamarerio/casamarerio_screen_large.webp",
        "/projects/casamarerio/casamarerio_desktop_large.webp",
        "/projects/casamarerio/casamarerio_tab_large.webp",
        "/projects/casamarerio/casamarerio_mobile_large.webp",
        "/projects/casamarerio/casamarerio_outside_large.webp",
      ],
      offer: "Site web vitrine",
      prestations: [
        { id: 1, name: "Création de site web vitrine" },
        { id: 2, name: "Création de logo" },
        { id: 3, name: "Création de charte graphique" },
      ],
       description : "blablabla description",
      
    },
    { 
      id:"3",
      title: "Casa Marerio",
      link: "#",
      thumbnail: "/projects/casamarerio/casamarerio_tab_large.webp",
      images: [
        "/projects/casamarerio/casamarerio_screen_large.webp",
        "/projects/casamarerio/casamarerio_desktop_large.webp",
        "/projects/casamarerio/casamarerio_tab_large.webp",
        "/projects/casamarerio/casamarerio_mobile_large.webp",
        "/projects/casamarerio/casamarerio_outside_large.webp",
      ],
      offer: "Site web vitrine",
      prestations: [
        { id: 1, name: "Création de site web vitrine" },
        { id: 2, name: "Création de logo" },
        { id: 3, name: "Création de charte graphique" },
      ],
      description : "blablabla description",
      
    },
    { 
      id:"4",
      title: "Casa Marerio",
      link: "#",
      thumbnail: "/projects/casamarerio/casamarerio_mobile_large.webp",
      images: [
        "/projects/casamarerio/casamarerio_screen_large.webp",
        "/projects/casamarerio/casamarerio_desktop_large.webp",
        "/projects/casamarerio/casamarerio_tab_large.webp",
        "/projects/casamarerio/casamarerio_mobile_large.webp",
        "/projects/casamarerio/casamarerio_outside_large.webp",
      ],
      offer: "Site web vitrine",
      prestations: [
        { id: 1, name: "Création de site web vitrine" },
        { id: 2, name: "Création de logo" },
        { id: 3, name: "Création de charte graphique" },
      ],
      description : "blablabla description",
    },
    { 
      id:"5",
      title: "Casa Marerio",
      link: "#",
      thumbnail: "/projects/casamarerio/casamarerio_outside_large.webp",
      images: [
        "/projects/casamarerio/casamarerio_screen_large.webp",
        "/projects/casamarerio/casamarerio_desktop_large.webp",
        "/projects/casamarerio/casamarerio_tab_large.webp",
        "/projects/casamarerio/casamarerio_mobile_large.webp",
        "/projects/casamarerio/casamarerio_outside_large.webp",
      ],
      offer: "Site web vitrine",
      prestations: [
        { id: 1, name: "Création de site web vitrine" },
        { id: 2, name: "Création de logo" },
        { id: 3, name: "Création de charte graphique" },
      ],
      description : "blablabla description",
      
    },
    
    { title: "Halima Garden", link: "#", thumbnail: "/projects/halimagarden/halima_desktop_large.webp",images: [
      "/projects/casamarerio/casamarerio_screen_large.webp",
      "/projects/casamarerio/casamarerio_desktop_large.webp",
      "/projects/casamarerio/casamarerio_tab_large.webp",
      "/projects/casamarerio/casamarerio_mobile_large.webp",
      "/projects/casamarerio/casamarerio_outside_large.webp",
    ],
    offer: "Site web vitrine",
    prestations: [
      { id: 1, name: "Création de site web vitrine" },
      { id: 2, name: "Création de logo" },
      { id: 3, name: "Création de charte graphique" },
    ],
    description : "blablabla description",
    },


    { title: "Halima Garden", link: "#", thumbnail: "/projects/halimagarden/halima_tab_large.webp",images: [
      "/projects/casamarerio/casamarerio_screen_large.webp",
      "/projects/casamarerio/casamarerio_desktop_large.webp",
      "/projects/casamarerio/casamarerio_tab_large.webp",
      "/projects/casamarerio/casamarerio_mobile_large.webp",
      "/projects/casamarerio/casamarerio_outside_large.webp",
    ],
    offer: "Site web vitrine",
    prestations: [
      { id: 1, name: "Création de site web vitrine" },
      { id: 2, name: "Création de logo" },
      { id: 3, name: "Création de charte graphique" },
    ],
    description : "blablabla description",
   },
    
   
   { title: "Halima Garden", link: "#", thumbnail: "/projects/halimagarden/halima_mobile_large.webp",images: [
      "/projects/casamarerio/casamarerio_screen_large.webp",
      "/projects/casamarerio/casamarerio_desktop_large.webp",
      "/projects/casamarerio/casamarerio_tab_large.webp",
      "/projects/casamarerio/casamarerio_mobile_large.webp",
      "/projects/casamarerio/casamarerio_outside_large.webp",
    ],
    offer: "Site web vitrine",
    prestations: [
      { id: 1, name: "Création de site web vitrine" },
      { id: 2, name: "Création de logo" },
      { id: 3, name: "Création de charte graphique" },
    ],
    description : "blablabla description",
   },


    { title: "Halima Garden", link: "#", thumbnail: "/projects/halimagarden/halima_totebag_mockup_large.webp", images: [
      "/projects/casamarerio/casamarerio_screen_large.webp",
      "/projects/casamarerio/casamarerio_desktop_large.webp",
      "/projects/casamarerio/casamarerio_tab_large.webp",
      "/projects/casamarerio/casamarerio_mobile_large.webp",
      "/projects/casamarerio/casamarerio_outside_large.webp",
    ],
    offer: "Site web vitrine",
    prestations: [
      { id: 1, name: "Création de site web vitrine" },
      { id: 2, name: "Création de logo" },
      { id: 3, name: "Création de charte graphique" },
    ],
    description : "blablabla description",
   },
    
    { title: "Project 10", link: "#", thumbnail: "/halima.webp",images: [
      "/projects/casamarerio/casamarerio_screen_large.webp",
      "/projects/casamarerio/casamarerio_desktop_large.webp",
      "/projects/casamarerio/casamarerio_tab_large.webp",
      "/projects/casamarerio/casamarerio_mobile_large.webp",
      "/projects/casamarerio/casamarerio_outside_large.webp",
    ],
    offer: "Site web vitrine",
    prestations: [
      { id: 1, name: "Création de site web vitrine" },
      { id: 2, name: "Création de logo" },
      { id: 3, name: "Création de charte graphique" },
    ],
    description : "blablabla description",
    },
    { title: "Project 11", link: "#", thumbnail: "/m-tech.webp",images: [
      "/projects/casamarerio/casamarerio_screen_large.webp",
      "/projects/casamarerio/casamarerio_desktop_large.webp",
      "/projects/casamarerio/casamarerio_tab_large.webp",
      "/projects/casamarerio/casamarerio_mobile_large.webp",
      "/projects/casamarerio/casamarerio_outside_large.webp",
    ],
    offer: "Site web vitrine",
    prestations: [
      { id: 1, name: "Création de site web vitrine" },
      { id: 2, name: "Création de logo" },
      { id: 3, name: "Création de charte graphique" },
    ],
    description : "blablabla description",
   },
    { title: "Project 12", link: "#", thumbnail:"/bel-horizon.webp",images: [
      "/projects/casamarerio/casamarerio_screen_large.webp",
      "/projects/casamarerio/casamarerio_desktop_large.webp",
      "/projects/casamarerio/casamarerio_tab_large.webp",
      "/projects/casamarerio/casamarerio_mobile_large.webp",
      "/projects/casamarerio/casamarerio_outside_large.webp",
    ],
    offer: "Site web vitrine",
    prestations: [
      { id: 1, name: "Création de site web vitrine" },
      { id: 2, name: "Création de logo" },
      { id: 3, name: "Création de charte graphique" },
    ],
    description : "blablabla description",
   },
    { title: "Project 13", link: "#", thumbnail: "/casamarerio.webp",images: [
      "/projects/casamarerio/casamarerio_screen_large.webp",
      "/projects/casamarerio/casamarerio_desktop_large.webp",
      "/projects/casamarerio/casamarerio_tab_large.webp",
      "/projects/casamarerio/casamarerio_mobile_large.webp",
      "/projects/casamarerio/casamarerio_outside_large.webp",
    ],
    offer: "Site web vitrine",
    prestations: [
      { id: 1, name: "Création de site web vitrine" },
      { id: 2, name: "Création de logo" },
      { id: 3, name: "Création de charte graphique" },
    ],
    description : "blablabla description",
   },


    { title: "Project 14", link: "#", thumbnail: "/halima.webp",images: [
      "/projects/casamarerio/casamarerio_screen_large.webp",
      "/projects/casamarerio/casamarerio_desktop_large.webp",
      "/projects/casamarerio/casamarerio_tab_large.webp",
      "/projects/casamarerio/casamarerio_mobile_large.webp",
      "/projects/casamarerio/casamarerio_outside_large.webp",
    ],
    offer: "Site web vitrine",
    prestations: [
        { id: 1, name: "Création de site web vitrine" },
        { id: 2, name: "Création de logo" },
        { id: 3, name: "Création de charte graphique" },
      ],
      description : "blablabla description",
    },


    { title: "Project 15", link: "#", thumbnail: "/m-tech.webp",images: [
      "/projects/casamarerio/casamarerio_screen_large.webp",
      "/projects/casamarerio/casamarerio_desktop_large.webp",
      "/projects/casamarerio/casamarerio_tab_large.webp",
      "/projects/casamarerio/casamarerio_mobile_large.webp",
      "/projects/casamarerio/casamarerio_outside_large.webp",
    ],
    offer: "Site web vitrine",
    prestations: [
        { id: 1, name: "Création de site web vitrine" },
        { id: 2, name: "Création de logo" },
        { id: 3, name: "Création de charte graphique" },
      ],
      description : "blablabla description", },
  ];

  return (
    <div className="parallax-container overflow-hidden">
      <ProjectShowcase products={products} />
    </div>
  );
};

export default ProjectsPage;
