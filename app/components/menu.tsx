import Link from "next/link";

export default function Menu() {
  const links = [
    // {
    //   link: "./",
    //   name: "home",
    //   img: "",
    // },
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
      link: "./ofertas",
      name: "Ofertas",
      img: "",
    },
    {
      link: "./contacto",
      name: "Contacto",
      img: "",
    },
  ];

  return (
      <nav className="flex lg:w-1/3 flex-wrap items-center  justify-around text-lg capitalize  tracking-wider font-medium md:ml-auto">
      {" "}
        {links.map((link) => (
          <Link
          key={links.indexOf(link)}
            href={link.link}
            className="mr-5 hover:text-neutral-700 hover:bg-transparent duration-300  "
          >
            {link.name}
          </Link>
        ))}
      </nav>
  );
}
