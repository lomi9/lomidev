import ProjectShowcase from './components/ProjectShowcase';

const ProjectsPage = () => {
  const products = [
    { 
      id:"1",
      group: "1",
      title: "Casa Marerio",
      link: "https://casa-marerio.com/",
      thumbnail: "/projects/casamarerio/casamarerio_screen_large.webp",
      images: [
        "/projects/casamarerio/casamarerio_screen_large.webp",
        "/projects/casamarerio/casamarerio_desktop_large.webp",
        "/projects/casamarerio/casamarerio_tab_large.webp",
        "/projects/casamarerio/casamarerio_mobile_large.webp",
        "/projects/casamarerio/casamarerio_outside_large.webp",
      ],
      offer: "Site web vitrine premium",
      tabName: "BasicOffer",
      build: "",
      prestations: [
        { id: 1, name: "Création d'un site vitrine personnalisé avec module de réservation" },
        { id: 2, name: "Création de logo" },
        { id: 3, name: "Création de charte graphique" },
        { id: 4, name: "Rédaction d'une page de blog" },
      ],
      description : "Site web imaginé pour la location d'un logement de vacances au Portugal. Il s'agit d'un site vitrine codé à la main, présentant le logement ainsi que les tarifs, et intégrant un module de réservation en ligne. Une page de blog a été ajoutée à ce site web, afin de diriger les client vers les meilleures adresses.",
    },


    { 
      id:"2",
      group: "1",
      title: "Casa Marerio",
      link: "https://casa-marerio.com/",
      thumbnail: "/projects/casamarerio/casamarerio_desktop_large.webp",
      images: [
        "/projects/casamarerio/casamarerio_screen_large.webp",
        "/projects/casamarerio/casamarerio_desktop_large.webp",
        "/projects/casamarerio/casamarerio_tab_large.webp",
        "/projects/casamarerio/casamarerio_mobile_large.webp",
        "/projects/casamarerio/casamarerio_outside_large.webp",
      ],
      offer: "Site web vitrine premium",
      tabName: "BasicOffer",
      build: "",
      prestations: [
        { id: 1, name: "Création d'un site vitrine personnalisé avec module de réservation" },
        { id: 2, name: "Création de logo" },
        { id: 3, name: "Création de charte graphique" },
        { id: 4, name: "Rédaction d'une page de blog" },
      ],
      description : "Site web imaginé pour la location d'un logement de vacances au Portugal. Il s'agit d'un site vitrine codé à la main, présentant le logement ainsi que les tarifs, et intégrant un module de réservation en ligne. Une page de blog a été ajoutée à ce site web, afin de diriger les client vers les meilleures adresses.",
    },


    { 
      id:"3",
      group: "1",
      title: "Casa Marerio",
      link: "https://casa-marerio.com/",
      thumbnail: "/projects/casamarerio/casamarerio_tab_large.webp",
      images: [
        "/projects/casamarerio/casamarerio_screen_large.webp",
        "/projects/casamarerio/casamarerio_desktop_large.webp",
        "/projects/casamarerio/casamarerio_tab_large.webp",
        "/projects/casamarerio/casamarerio_mobile_large.webp",
        "/projects/casamarerio/casamarerio_outside_large.webp",
      ],
      offer: "Site web vitrine premium",
      tabName: "BasicOffer",
      build: "",
      prestations: [
        { id: 1, name: "Création d'un site vitrine personnalisé avec module de réservation" },
        { id: 2, name: "Création de logo" },
        { id: 3, name: "Création de charte graphique" },
        { id: 4, name: "Rédaction d'une page de blog" },
      ],
      description : "Site web imaginé pour la location d'un logement de vacances au Portugal. Il s'agit d'un site vitrine codé à la main, présentant le logement ainsi que les tarifs, et intégrant un module de réservation en ligne. Une page de blog a été ajoutée à ce site web, afin de diriger les client vers les meilleures adresses.",
    },


    { 
      id:"4",
      group: "1",
      title: "Casa Marerio",
      link: "https://casa-marerio.com/",
      thumbnail: "/projects/casamarerio/casamarerio_mobile_large.webp",
      images: [
        "/projects/casamarerio/casamarerio_screen_large.webp",
        "/projects/casamarerio/casamarerio_desktop_large.webp",
        "/projects/casamarerio/casamarerio_tab_large.webp",
        "/projects/casamarerio/casamarerio_mobile_large.webp",
        "/projects/casamarerio/casamarerio_outside_large.webp",
      ],
      offer: "Site web vitrine premium",
      tabName: "BasicOffer",
      build: "",
      prestations: [
        { id: 1, name: "Création d'un site vitrine personnalisé avec module de réservation" },
        { id: 2, name: "Création de logo" },
        { id: 3, name: "Création de charte graphique" },
        { id: 4, name: "Rédaction d'une page de blog" },
      ],
      description : "Site web imaginé pour la location d'un logement de vacances au Portugal. Il s'agit d'un site vitrine codé à la main, présentant le logement ainsi que les tarifs, et intégrant un module de réservation en ligne. Une page de blog a été ajoutée à ce site web, afin de diriger les client vers les meilleures adresses.",
    },


    { 
      id:"5",
      group: "1",
      title: "Casa Marerio",
      link: "https://casa-marerio.com/",
      thumbnail: "/projects/casamarerio/casamarerio_outside_large.webp",
      images: [
        "/projects/casamarerio/casamarerio_screen_large.webp",
        "/projects/casamarerio/casamarerio_desktop_large.webp",
        "/projects/casamarerio/casamarerio_tab_large.webp",
        "/projects/casamarerio/casamarerio_mobile_large.webp",
        "/projects/casamarerio/casamarerio_outside_large.webp",
      ],
      offer: "Site web vitrine premium",
      tabName: "BasicOffer",
      build: "",
      prestations: [
        { id: 1, name: "Création d'un site vitrine personnalisé avec module de réservation" },
        { id: 2, name: "Création de logo" },
        { id: 3, name: "Création de charte graphique" },
        { id: 4, name: "Rédaction d'une page de blog" },
      ],
      description : "Site web imaginé pour la location d'un logement de vacances au Portugal. Il s'agit d'un site vitrine codé à la main, présentant le logement ainsi que les tarifs, et intégrant un module de réservation en ligne. Une page de blog a été ajoutée à ce site web, afin de diriger les client vers les meilleures adresses.",
    },
    
    { 
      id:"6",
      group: "2",
      title: "Halima Garden",
      link: "#",
      thumbnail: "/projects/halimagarden/halima_desktop_large.webp",
      images: [
      "/projects/halimagarden/halima_desktop_large.webp",
      "/projects/halimagarden/halima_tab_large.webp",
      "/projects/halimagarden/halima_mobile_large.webp",
      "/projects/halimagarden/halima_totebag_mockup_large.webp",
      "/projects/halimagarden/halima_screen_large.webp",
    ],
    offer: "Site e-commerce premium personnalisé",
    build: "En construction",
    prestations: [
      { id: 1, name: "Création de site web e-commerce premium personnalisé" },
      { id: 2, name: "Création de logo" },
      { id: 3, name: "Création de charte graphique" },
      { id: 3, name: "Création de la logique de connexion utilisateur" },
      { id: 3, name: "Gestion de la base de données des produits" },
      { id: 3, name: "Création de la logique du panier utilisateur" },
      
    ],
    description : "Il s'agit ici de créer une image de marque dans sa totalité : branding, logo, site web, étiquettes... Ce site web e-commerce, permettant à l'utilisateur d'acheter des produits hauts de gamme d'artisanat marocain, a été imaginé de zéro et codé à la main. ",
    },


    { 
      id:"7",
      group: "2",
      title: "Halima Garden",
      link: "#",
      thumbnail: "/projects/halimagarden/halima_tab_large.webp",
      images: [
      "/projects/halimagarden/halima_desktop_large.webp",
      "/projects/halimagarden/halima_tab_large.webp",
      "/projects/halimagarden/halima_mobile_large.webp",
      "/projects/halimagarden/halima_totebag_mockup_large.webp",
      "/projects/halimagarden/halima_screen_large.webp",
    ],
    offer: "Site e-commerce premium personnalisé",
    build: "En construction",
    prestations: [
      { id: 1, name: "Création de site web e-commerce premium personnalisé" },
      { id: 2, name: "Création de logo" },
      { id: 3, name: "Création de charte graphique" },
      { id: 3, name: "Création de la logique de connexion utilisateur" },
      { id: 3, name: "Gestion de la base de données des produits" },
      { id: 3, name: "Création de la logique du panier utilisateur" },
      
    ],
    description : "Il s'agit ici de créer une image de marque dans sa totalité : branding, logo, site web, étiquettes... Ce site web e-commerce, permettant à l'utilisateur d'acheter des produits hauts de gamme d'artisanat marocain, a été imaginé de zéro et codé à la main. ",
    },
    
   
    { 
      id:"8",
      group: "2",
      title: "Halima Garden",
      link: "#",
      thumbnail:  "/projects/halimagarden/halima_mobile_large.webp",
      images: [
      "/projects/halimagarden/halima_desktop_large.webp",
      "/projects/halimagarden/halima_tab_large.webp",
      "/projects/halimagarden/halima_mobile_large.webp",
      "/projects/halimagarden/halima_totebag_mockup_large.webp",
      "/projects/halimagarden/halima_screen_large.webp",
    ],
    offer: "Site e-commerce premium personnalisé",
    build: "En construction",
    prestations: [
      { id: 1, name: "Création de site web e-commerce premium personnalisé" },
      { id: 2, name: "Création de logo" },
      { id: 3, name: "Création de charte graphique" },
      { id: 3, name: "Création de la logique de connexion utilisateur" },
      { id: 3, name: "Gestion de la base de données des produits" },
      { id: 3, name: "Création de la logique du panier utilisateur" },
      
    ],
    description : "Il s'agit ici de créer une image de marque dans sa totalité : branding, logo, site web, étiquettes... Ce site web e-commerce, permettant à l'utilisateur d'acheter des produits hauts de gamme d'artisanat marocain, a été imaginé de zéro et codé à la main. ",
    },


    { 
      id:"9",
      group: "2",
      title: "Halima Garden",
      link: "#",
      thumbnail:  "/projects/halimagarden/halima_totebag_mockup_large.webp",
      images: [
      "/projects/halimagarden/halima_desktop_large.webp",
      "/projects/halimagarden/halima_tab_large.webp",
      "/projects/halimagarden/halima_mobile_large.webp",
      "/projects/halimagarden/halima_totebag_mockup_large.webp",
      "/projects/halimagarden/halima_screen_large.webp",
    ],
    offer: "Site e-commerce premium personnalisé",
    build: "En construction",
    prestations: [
      { id: 1, name: "Création de site web e-commerce premium personnalisé" },
      { id: 2, name: "Création de logo" },
      { id: 3, name: "Création de charte graphique" },
      { id: 3, name: "Création de la logique de connexion utilisateur" },
      { id: 3, name: "Gestion de la base de données des produits" },
      { id: 3, name: "Création de la logique du panier utilisateur" },
      
    ],
    description : "Il s'agit ici de créer une image de marque dans sa totalité : branding, logo, site web, étiquettes... Ce site web e-commerce, permettant à l'utilisateur d'acheter des produits hauts de gamme d'artisanat marocain, a été imaginé de zéro et codé à la main. ",
    },
    

    { 
      id:"10",
      group: "2",
      title: "Halima Garden",
      link: "#",
      thumbnail:  "/projects/halimagarden/halima_screen_large.webp",
      images: [
      "/projects/halimagarden/halima_desktop_large.webp",
      "/projects/halimagarden/halima_tab_large.webp",
      "/projects/halimagarden/halima_mobile_large.webp",
      "/projects/halimagarden/halima_totebag_mockup_large.webp",
      "/projects/halimagarden/halima_screen_large.webp",
    ],
    offer: "Site e-commerce premium personnalisé",
    build: "En construction",
    prestations: [
      { id: 1, name: "Création de site web e-commerce premium personnalisé" },
      { id: 2, name: "Création de logo" },
      { id: 3, name: "Création de charte graphique" },
      { id: 3, name: "Création de la logique de connexion utilisateur" },
      { id: 3, name: "Gestion de la base de données des produits" },
      { id: 3, name: "Création de la logique du panier utilisateur" },
      
    ],
    description : "Il s'agit ici de créer une image de marque dans sa totalité : branding, logo, site web, étiquettes... Ce site web e-commerce, permettant à l'utilisateur d'acheter des produits hauts de gamme d'artisanat marocain, a été imaginé de zéro et codé à la main. ",
    },


    { 
      id:"11",
      group: "3",
      title: "Bel Horizon",
      link: "https://bel-horizon-grauduroi.fr/",
      thumbnail:  "/projects/belhorizon/belhorizon_tshirt_large.webp",
      images: [
      "/projects/belhorizon/belhorizon_desktop_large.webp",
      "/projects/belhorizon/belhorizon_tshirt_large.webp",
      "/projects/belhorizon/belhorizon_macbook_large.webp",
      "/projects/belhorizon/belhorizon_tab_large.webp",
      "/projects/belhorizon/belhorizon_mobile_large.webp",
    ],
    offer: "Site web vitrine basique",
    build: "",
    prestations: [
      { id: 1, name: "Création de site web vitrine simple" },
      { id: 2, name: "Création de logo" },
    ],
    description : "Ce site web est un site vitrine simple, permettant simplement de présenter le logement de vacances situé au Grau du Roi 'Bel Horizon'. Ce site web a été construit avec Wordpress, il intègre un module de visualisation des disponibilités, ainsi qu'une page de description du logement.",
    },

    { 
      id:"12",
      group: "3",
      title: "Bel Horizon",
      link: "https://bel-horizon-grauduroi.fr/",
      thumbnail:  "/projects/belhorizon/belhorizon_desktop_large.webp",
      images: [
      "/projects/belhorizon/belhorizon_desktop_large.webp",
      "/projects/belhorizon/belhorizon_tshirt_large.webp",
      "/projects/belhorizon/belhorizon_macbook_large.webp",
      "/projects/belhorizon/belhorizon_tab_large.webp",
      "/projects/belhorizon/belhorizon_mobile_large.webp",
    ],
    offer: "Site web vitrine basique",
    build: "",
    prestations: [
      { id: 1, name: "Création de site web vitrine simple" },
      { id: 2, name: "Création de logo" },
    ],
    description : "Ce site web est un site vitrine simple, permettant simplement de présenter le logement de vacances situé au Grau du Roi 'Bel Horizon'. Ce site web a été construit avec Wordpress, il intègre un module de visualisation des disponibilités, ainsi qu'une page de description du logement.",
    },


    { 
      id:"13",
      group: "3",
      title: "Bel Horizon",
      link: "https://bel-horizon-grauduroi.fr/",
      thumbnail:  "/projects/belhorizon/belhorizon_macbook_large.webp",
      images: [
      "/projects/belhorizon/belhorizon_desktop_large.webp",
      "/projects/belhorizon/belhorizon_tshirt_large.webp",
      "/projects/belhorizon/belhorizon_macbook_large.webp",
      "/projects/belhorizon/belhorizon_tab_large.webp",
      "/projects/belhorizon/belhorizon_mobile_large.webp",
    ],
    offer: "Site web vitrine basique",
    build: "",
    prestations: [
      { id: 1, name: "Création de site web vitrine simple" },
      { id: 2, name: "Création de logo" },
    ],
    description : "Ce site web est un site vitrine simple, permettant simplement de présenter le logement de vacances situé au Grau du Roi 'Bel Horizon'. Ce site web a été construit avec Wordpress, il intègre un module de visualisation des disponibilités, ainsi qu'une page de description du logement.",
    },

    { 
      id:"14",
      group: "3",
      title: "Bel Horizon",
      link: "https://bel-horizon-grauduroi.fr/",
      thumbnail:  "/projects/belhorizon/belhorizon_tab_large.webp",
      images: [
      "/projects/belhorizon/belhorizon_desktop_large.webp",
      "/projects/belhorizon/belhorizon_tshirt_large.webp",
      "/projects/belhorizon/belhorizon_macbook_large.webp",
      "/projects/belhorizon/belhorizon_tab_large.webp",
      "/projects/belhorizon/belhorizon_mobile_large.webp",
    ],
    offer: "Site web vitrine basique",
    build: "",
    prestations: [
      { id: 1, name: "Création de site web vitrine simple" },
      { id: 2, name: "Création de logo" },
    ],
    description : "Ce site web est un site vitrine simple, permettant simplement de présenter le logement de vacances situé au Grau du Roi 'Bel Horizon'. Ce site web a été construit avec Wordpress, il intègre un module de visualisation des disponibilités, ainsi qu'une page de description du logement.",
    },


    { 
      id:"15",
      group: "3",
      title: "Bel Horizon",
      link: "https://bel-horizon-grauduroi.fr/",
      thumbnail:  "/projects/belhorizon/belhorizon_mobile_large.webp",
      images: [
      "/projects/belhorizon/belhorizon_desktop_large.webp",
      "/projects/belhorizon/belhorizon_tshirt_large.webp",
      "/projects/belhorizon/belhorizon_macbook_large.webp",
      "/projects/belhorizon/belhorizon_tab_large.webp",
      "/projects/belhorizon/belhorizon_mobile_large.webp",
    ],
    offer: "Site web vitrine basique",
    build: "",
    prestations: [
      { id: 1, name: "Création de site web vitrine simple" },
      { id: 2, name: "Création de logo" },
    ],
    description : "Ce site web est un site vitrine simple, permettant simplement de présenter le logement de vacances situé au Grau du Roi 'Bel Horizon'. Ce site web a été construit avec Wordpress, il intègre un module de visualisation des disponibilités, ainsi qu'une page de description du logement.",
    },


  ];

  return (
    <div className="parallax-container overflow-hidden">
      <ProjectShowcase products={products} />
    </div>
  );
};

export default ProjectsPage;
