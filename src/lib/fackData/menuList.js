import menu_image_1 from "@/assets/images/menu-image-1.png";
export const menuList = [
  {
    id: 1,
    name: "Home",
    path: "/",
    isMegaMenu: false,
    isDropdown: false,
  },
  {
    id: 2,
    name: "Our Mission",
    path: "#",
    isMegaMenu: false,
    isDropdown: [
      {
        id: 1,
        name: "About Restorative Partners",
        path: "/about",
        desc: "Everything from concept to completion",
      },
      {
        id: 2,
        name: "About Restorative Justice",
        path: "/restorative-justice",
        desc: "Everything from concept to completion",
      },

      {
        id: 3,
        name: "Our Leaders",
        path: "/our-leaders",
        desc: "Everything from concept to completion",
      },
      {
        id: 4,
        name: "Annual Reports",
        path: "/annual-reports",
        desc: "Everything from concept to completion",
      },
      {
        id: 5,
        name: "Mission Statement",
        path: "/mission",
        desc: "Everything from concept to completion",
      },
    ],
  },
  {
    id: 3,
    name: "Programs & Services",
    path: "#",
    isDropdown: false,
    isMegaMenu: [
      {
        id: 1,
        menus: [
          {
            id: 1,
            name: "In Custody Programs",
            path: "/in-custody-programs",
            desc: "Support from concept to completion, fostering rehabilitation and growth within facilities.",
          },
          {
            id: 2,
            name: "System Navigation",
            path: "/system-navigation",
            desc: "Assistance navigating legal and administrative systems, ensuring fair treatment and access to resources.",
          },
          {
            id: 3,
            name: "Mentorship",
            path: "/mentorship",
            desc: "Maximizing potential through supportive mentorship, fostering development.",
          },
          { id: 3, name: "", path: "/not-used", desc: "" },
          { id: 3, name: "", path: "/not-used", desc: "" },
        ],
      },
      {
        id: 2,
        menus: [
          {
            id: 4,
            name: "Juvenile Hall Programs",
            path: "/in-custody-programs/juvenile-hall",
            desc: "Tailored interventions addressing the needs of young individuals in custody, promoting rehabilitation and reintegration.",
          },
          {
            id: 5,
            name: "Treatment Services",
            path: "/treatment",
            desc: "Holistic treatment addressing root causes of behavior, promoting healing and recovery.",
          },
          {
            id: 6,
            name: "Workforce Development",
            path: "/workforce-development",
            desc: "Equipping individuals with skills for the workforce, promoting stability and reducing recidivism.",
          },
        ],
      },
      {
        id: 3,
        menus: [
          {
            id: 7,
            name: "Reentry Resources",
            path: "/reentry-resources",
            desc: "Supportive services facilitating successful reentry into the community, including employment assistance and housing support.",
          },
          {
            id: 8,
            name: "Housing",
            path: "/housing",
            desc: "Housing solutions and support services ensuring stable and safe housing, promoting stability and reducing recidivism.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Get Involved",
    path: "#",
    isMegaMenu: false,
    isDropdown: [
      {
        id: 1,
        name: "Events",
        path: "/events",
      },
      {
        id: 2,
        name: "Volunteer",
        path: "/volunteer",
      },
      {
        id: 2,
        name: "Workshops & Trainings",
        path: "/workshops",
      },
      {
        id: 3,
        name: "Careers",
        path: "/careers",
      },
      {
        id: 4,
        name: "Donations",
        path: "/donations",
      },
    ],
  },
  // {
  //   id: 5,
  //   name: "Blog",
  //   path: "/blog",
  //   isMegaMenu: false,
  //   isDropdown: false,
  // },
  {
    id: 6,
    name: "Donate",
    path: "https://restorativepartners.networkforgood.com/projects/214282-restorative-partners",
    isMegaMenu: false,
    isDropdown: false,
  },
];

export const mobileMenuList = [
  {
    id: 1,
    name: "Home",
    path: "/",
    isMegaMenu: false,
    isDropdown: false,
  },
  {
    id: 2,
    name: "Our Mission",
    path: "#",
    isMegaMenu: false,
    isDropdown: [
      {
        id: 1,
        name: "About Restorative Partners",
        path: "/about",
        desc: "Everything from concept to completion",
      },
      {
        id: 2,
        name: "About Restorative Justice",
        path: "/restorative-justice",
        desc: "Everything from concept to completion",
      },

      {
        id: 3,
        name: "Our Leaders",
        path: "/our-leaders",
        desc: "Everything from concept to completion",
      },
      {
        id: 4,
        name: "Annual Reports",
        path: "/annual-reports",
        desc: "Everything from concept to completion",
      },
      {
        id: 5,
        name: "Mission Statement",
        path: "/mission",
        desc: "Everything from concept to completion",
      },
    ],
  },
  {
    id: 3,
    name: "Programs & Services",
    path: "#",
    isDropdown: false,
    isMegaMenu: [
      {
        id: 1,
        menus: [
          {
            id: 1,
            name: "In Custody Programs",
            path: "/in-custody-programs",
            desc: "Support from concept to completion, fostering rehabilitation and growth within facilities.",
          },
          {
            id: 2,
            name: "System Navigation",
            path: "/system-navigation",
            desc: "Assistance navigating legal and administrative systems, ensuring fair treatment and access to resources.",
          },
          {
            id: 3,
            name: "Mentorship",
            path: "/mentorship",
            desc: "Maximizing potential through supportive mentorship, fostering development.",
          },
        ],
      },
      {
        id: 2,
        menus: [
          {
            id: 4,
            name: "Juvenile Hall Programs",
            path: "/in-custody-programs/juvenile-hall",
            desc: "Tailored interventions addressing the needs of young individuals in custody, promoting rehabilitation and reintegration.",
          },
          {
            id: 5,
            name: "Treatment Services",
            path: "/treatment",
            desc: "Holistic treatment addressing root causes of behavior, promoting healing and recovery.",
          },
          {
            id: 6,
            name: "Workforce Development",
            path: "/workforce-development",
            desc: "Equipping individuals with skills for the workforce, promoting stability and reducing recidivism.",
          },
        ],
      },
      {
        id: 3,
        menus: [
          {
            id: 7,
            name: "Reentry Resources",
            path: "/reentry-resources",
            desc: "Supportive services facilitating successful reentry into the community, including employment assistance and housing support.",
          },
          {
            id: 8,
            name: "Housing",
            path: "/housing",
            desc: "Housing solutions and support services ensuring stable and safe housing, promoting stability and reducing recidivism.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Get Involved",
    path: "#",
    isMegaMenu: false,
    isDropdown: [
      {
        id: 1,
        name: "Events",
        path: "/events",
      },
      {
        id: 2,
        name: "Volunteer",
        path: "/volunteer",
      },
      {
        id: 2,
        name: "Workshops & Trainings",
        path: "/workshops",
      },
      {
        id: 3,
        name: "Careers",
        path: "/careers",
      },
      {
        id: 4,
        name: "Donations",
        path: "/donations",
      },
    ],
  },
  // {
  //   id: 5,
  //   name: "Blog",
  //   path: "/blog",
  //   isMegaMenu: false,
  //   isDropdown: false,
  // },
  {
    id: 6,
    name: "Donate",
    path: "https://restorativepartners.networkforgood.com/projects/214282-restorative-partners",
    isMegaMenu: false,
    isDropdown: false,
  },
];
