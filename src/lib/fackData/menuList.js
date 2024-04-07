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
            desc: "Everything from concept to completion",
          },
          {
            id: 2,
            name: "System Navigation",
            path: "/system-navigation",
            desc: "Focuses on optimizing functionality and aesthetics",
          },
          {
            id: 3,
            name: "Mentorship",
            path: "/mentorship",
            desc: "Maximize the potential of your space",
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
            desc: "We help you choose the perfect palette",
          },
          {
            id: 5,
            name: "Treatment Services",
            path: "/treatment",
            desc: "We oversee every detail for a successful project",
          },
          {
            id: 6,
            name: "Workforce Development",
            path: "/workforce-development",
            desc: "Elevate your space with unique furnishings",
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
            desc: "Develop a design concept",
          },
          {
            id: 8,
            name: "Housing",
            path: "/housing",
            desc: "Renovation and remodeling services that breathe new life",
          },
        ],
      },
      {
        id: 5,
        menus: [
          {
            id: 9,
            name: "We are here for you. Let's get started!",
            path: "/contact",
            desc: "Connect Now",
            img: menu_image_1,
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
    name: "Blog",
    path: "/blog",
    isMegaMenu: false,
    isDropdown: false,
  },
  {
    id: 6,
    name: "Donate",
    path: "/donate",
    isMegaMenu: false,
    isDropdown: false,
  },
];
