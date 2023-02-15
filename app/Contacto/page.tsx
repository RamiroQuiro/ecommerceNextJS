import contacto from "../../images/BannerContacto.jpg";
import Image from "next/image";
export default function Cotacto() {
  return (
    <section className="text-neutral-600 body-font w-full relative ">
      <div className="relative w-10/12 px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap h-[120vh]">
        <div className=" absolute lg:w-full hidden md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-3 md:flex items-end justify-start ">
          <Image src={contacto}
          width={"100"}
          height={"100"}
          alt="contacto"
          />
        </div>
        <div className=" md:absolute right-3 top-28 rounded-lg lg:w-1/3 md:w-1/2 bg-white/90 backdrop-blur-sm flex flex-col md:ml-auto w-full p-5 mt-8 md:mt-0">
          <h2 className=" text-2xl mb-1 font-medium title-font">
            Contactanos
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Mandanos tus dudas, tus deseos, tus proyectos y charlamos
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Tu Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Tu Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Tu Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Enviar
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Mandanos y en breve te responderemos, muchas gracias MEEEEEN!
          </p>
        </div>
      </div>
    </section>
  );
}
