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
      link: "./contacto",
      name: "Contacto",
      img: "",
    },
  ];

  return (
    <nav className="flex md:w-4/12  lg:w-4/12 w-full md:mr-10 flex-wrap items-center  justify-between text-lg capitalize  tracking-wider font-normal md:ml-auto">
      {" "}
      {links.map((link) => (
        <Link
          key={links.indexOf(link)}
          href={link.link}
          className=" hover:text-sky-700 text-center  hover:bg-transparent duration-300  "
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
