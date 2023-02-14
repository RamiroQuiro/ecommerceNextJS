import Link from "next/link";

export default function Menu() {
  const links = [

    {
      link: "./store",
      name: "Store",
      img: "",
    },
    {
      link: "./faq",
      name: "FAQ",
      img: "",
    },

    {
      link: "./Contacto",
      name: "Contacto",
      img: "",
    },
  ];

  return (
    <nav className="flex lg:w-4/12 w-full flex-wrap items-center  justify-around text-lg capitalize  tracking-wider font-normal md:ml-auto">
      {" "}
      {links.map((link) => (
        <Link
          key={links.indexOf(link)}
          href={link.link}
          className=" hover:text-sky-700 hover:bg-transparent duration-300  "
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
