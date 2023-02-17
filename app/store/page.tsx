import {getSliceItems} from "../../services/itemsServices";

export default async function Store() {

  return (
    <section className="pb-28">
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <header className="text-center">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          Nuestros Productos Estrellas
        </h2>
  
        <p className="max-w-md mx-auto mt-4 text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
          natus?
        </p>
      </header>
  
      <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
        <li>
          <a href="#" className="relative block group">
            <img
              src="https://images.pexels.com/photos/2930894/pexels-photo-2930894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
            />
  
            <div
              className="absolute inset-0 flex flex-col items-start justify-end p-6"
            >
                <h2 className=" text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-orange-600 from-orange-800">Casual Trainers</h2>
  
              <span
                className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
              >
                Ver Más
              </span>
            </div>
          </a>
        </li>
  
        <li>
          <a href="#" className="relative block group">
            <img
              src="https://images.pexels.com/photos/2563410/pexels-photo-2563410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
            />
  
            <div
              className="absolute inset-0 flex flex-col items-start justify-end p-6"
            >
                <h2 className=" text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-orange-600 from-orange-800">Winter Jumpers</h2>
  
              <span
                className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
              >
                  Ver Más
              </span>
            </div>
          </a>
        </li>
  
        <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <a href="#" className="relative block group">
            <img
              src="https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
            />
  
            <div
              className="absolute inset-0 flex flex-col items-start justify-end p-6"
            >
                 <h2 className=" text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-orange-600 from-orange-800">Juego de mesa tipo industrial</h2>
  
              <span
                className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
              >
                   Ver Más
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
  
  );
}
