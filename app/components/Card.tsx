import Image from "next/image";
import Link from "next/link";
export default function Card({opcion}) {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full border bg-gray-50/50" key={opcion.id}>
              <Link className="block relative h-48 rounded overflow-hidden"
              href={'/store/'+opcion.id}

              >
                <Image
                width={"100"}
                height="100"
                  alt={opcion.item}
                  className="object-cover object-center w-full h-full block"
                  src={opcion.image_url}
                />
                </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                <Link className="block relative h-48 rounded overflow-hidden"
                href={'/store/'+opcion.id}
              > {opcion.category}</Link>
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {opcion.item}
                </h2>
              </div>
              <div className="flex items-center justify-around">
                <p className="mt-1">${opcion.price}</p>

              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Añadir al Carrito
              </button>
              </div>
            </div>
  )
}
