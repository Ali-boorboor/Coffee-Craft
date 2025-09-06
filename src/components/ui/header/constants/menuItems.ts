const desktopMenuItems = [
  { id: 1, href: "/", title: "home" },
  { id: 2, href: "/about", title: "about" },
  { id: 3, href: "/services", title: "service" },
  { id: 4, href: "/menu", title: "menu" },
  {
    id: 5,
    title: "pages",
    children: [
      { id: "5-1", href: "/reservation", title: "reservation" },
      { id: "5-2", href: "/testimonial", title: "testimonial" },
    ],
  },
  { id: 6, href: "/contact", title: "contact" },
];

const mobileMenuItems = [
  { id: 1, href: "/", title: "home" },
  { id: 2, href: "/about", title: "about" },
  { id: 3, href: "/services", title: "service" },
  { id: 4, href: "/menu", title: "menu" },
  { id: 5, href: "/reservation", title: "reservation" },
  { id: 6, href: "/testimonial", title: "testimonial" },
  { id: 7, href: "/contact", title: "contact" },
];

export { desktopMenuItems, mobileMenuItems };
