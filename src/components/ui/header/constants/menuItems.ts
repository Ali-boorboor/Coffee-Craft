const desktopMenuItems = [
  { id: 1, href: "#", title: "home" },
  { id: 2, href: "/about", title: "about" },
  { id: 3, href: "#", title: "service" },
  { id: 4, href: "#", title: "menu" },
  {
    id: 5,
    title: "pages",
    children: [
      { id: "5-1", href: "#", title: "reservation" },
      { id: "5-2", href: "#", title: "testimonial" },
    ],
  },
  { id: 6, href: "#", title: "contact" },
];

const mobileMenuItems = [
  { id: 1, href: "#", title: "home" },
  { id: 2, href: "/about", title: "about" },
  { id: 3, href: "#", title: "service" },
  { id: 4, href: "#", title: "menu" },
  { id: 5, href: "#", title: "reservation" },
  { id: 6, href: "#", title: "testimonial" },
  { id: 7, href: "#", title: "contact" },
];

export { desktopMenuItems, mobileMenuItems };
