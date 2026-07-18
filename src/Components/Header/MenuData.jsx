const menuItems = [
  {
    id: 1,
    title: "صفحه اصلی",
    path: "/",
  },
  {
    id: 2,
    title: "درباره ما",
    path: "#about",
  },
  {
    id: 3,
    title: "ارتباط باما",
    path: "#contact",
  },
  {
    id: 4,
    title: "نمونه کار",
    path: "#portfolio",
  },
  {
    id: 5,
    title: "خدمات",
    path: "#services",

    submenu: [
      {
        id: 1,
        title: "سایت فروشگاهی",
        slug: "shop",
      },
      {
        id: 2,
        title: "سایت آموزشی",
        slug: "education",
      },
      {
        id: 3,
        title: "سایت گردشگری",
        slug: "tourism",
      },
      {
        id: 4,
        title: "سایت شرکتی",
        slug: "company",
      },
      {
        id: 5,
        title: "سایت پزشکی",
        slug: "medical",
      },
      {
        id: 6,
        title: "سایت وکالت",
        slug: "law",
      },
      {
        id: 7,
        title: "سایت خبری",
        slug: "news",
      },
      {
        id: 8,
        title: "سایت املاک",
        slug: "real-estate",
      },
    ],
  },
];

export default menuItems;
