import Link from "next/link";

export default function Menu() {
  const links = [
    {
      link: "./home",
      name: "home",
      img: "",
    },
    {
      link: "./faq",
      name: "Faq",
      img: "",
    },
    {
      link: "./store",
      name: "Store",
      img: "",
    },
  ];

  return (
      <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      {" "}
        {links.map((link) => (
          <Link
          key={links.indexOf(link)}
            href={link.link}
            className="mr-5 hover:text-gray-900"
          >
            {link.name}
          </Link>
        ))}
      </nav>
  );
}
