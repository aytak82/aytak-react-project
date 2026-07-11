import SubMenu from "./Submenu";

export default function MenoItem() {
  let item = [
    {
      id: 1,
      title: "صفحه اصلی",
    },
    {
      id: 2,
      title: "درباره ما",
    },
    {
      id: 3,
      title: "ارتباط باما",
    },
    {
      id: 4,
      title: "نمونه کار",
    },
    {
      id: 5,
      title: "خدمات",
      submenu: [
        { id: 1, title: "طراحی سایت" },
        { id: 2, title: "طراحی فروشگاه" },
        { id: 3, title: "سایت شرکتی" },
      ],
    },
  ];
  return (
    <>
      {item.map((item) => (
        <li className="menu-item" key={item.id}>
          <a href="#">{item.title}</a>

          {item.submenu && <SubMenu submenu={item.submenu} />}
        </li>
      ))}
    </>
  );
}
