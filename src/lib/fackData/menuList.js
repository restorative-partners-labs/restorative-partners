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
            desc: "Offering education, vocational training, and counseling services to individuals while they are in custody to aid in their personal growth and preparation for reentry into society.",
          },
          // { id: 3, name: "", path: "/not-used", desc: "" },
          // { id: 3, name: "", path: "/not-used", desc: "" },
        ],
      },
      {
        id: 2,
        menus: [
          {
            id: 4,
            name: "ReEntry Resources",
            path: "/in-custody-programs/juvenile-hall",
            desc: "Providing support and resources such as job training, employment assistance, and legal aid to help formerly incarcerated individuals successfully transition back into their communities.",
          },
        ],
      },
      {
        id: 3,
        menus: [
          {
            id: 7,
            name: "Housing",
            path: "/housing",
            desc: "Assisting with finding safe and stable housing options for individuals who are reentering society, ensuring they have a secure place to live as they rebuild their lives.",
          },
        ],
      },
      {
        id: 4,
        menus: [
          {
            id: 9,
            name: "Treatment Services",
            path: "/treatment",
            desc: "Offering access to mental health services, substance abuse treatment, and other healthcare resources to support the well-being and rehabilitation of individuals affected by the justice system.",
          },
        ],
      },
      {
        id: 5,
        menus: [
          {
            id: 9,
            name: "Social Enterprises",
            path: "/social-enterprises",
            desc: "Creating business opportunities and employment pathways through social enterprises that help individuals gain work experience, develop skills, and achieve economic independence.",
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
  {
    id: 5,
    name: "Contact",
    path: "/contact",
    isMegaMenu: false,
    isDropdown: [
      {
        id: 1,
        name: "Contact Info",
        path: "/contact",
        desc: "Everything from concept to completion",
      },
      {
        id: 2,
        name: "(805)555-5555",
        path: "/restorative-justice",
        desc: "Everything from concept to completion",
      },

      {
        id: 3,
        name: "Instagram",
        path: "https://www.instagram.com/restorativepartners/",
        desc: "Everything from concept to completion",
      },
      {
        id: 4,
        name: "Facebook",
        path: "https://www.facebook.com/RestorativePartners/",
        desc: "Everything from concept to completion",
      },
      {
        id: 5,
        name: "LinkedIn",
        path: "https://www.linkedin.com/company/restorative-partners",
        desc: "Everything from concept to completion",
      },
    ],
  },
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
            desc: "Offering education, vocational training, and counseling services to individuals while they are in custody to aid in their personal growth and preparation for reentry into society.",
          },
        ],
      },
      {
        id: 2,
        menus: [
          {
            id: 4,
            name: "ReEntry Resources",
            path: "/in-custody-programs/juvenile-hall",
            desc: "Providing support and resources such as job training, employment assistance, and legal aid to help formerly incarcerated individuals successfully transition back into their communities.",
          },
        ],
      },
      {
        id: 3,
        menus: [
          {
            id: 7,
            name: "Housing",
            path: "/housing",
            desc: "Assisting with finding safe and stable housing options for individuals who are reentering society, ensuring they have a secure place to live as they rebuild their lives.",
          },
        ],
      },
      {
        id: 4,
        menus: [
          {
            id: 9,
            name: "Treatment Services",
            path: "/treatment",
            desc: "Offering access to mental health services, substance abuse treatment, and other healthcare resources to support the well-being and rehabilitation of individuals affected by the justice system.",
          },
        ],
      },
      {
        id: 5,
        menus: [
          {
            id: 9,
            name: "Social Enterprises",
            path: "/social-enterprises",
            desc: "Creating business opportunities and employment pathways through social enterprises that help individuals gain work experience, develop skills, and achieve economic independence.",
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
