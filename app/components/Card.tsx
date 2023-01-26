import Image from "next/image";
import Link from "next/link";
import ButtonAñadirCarrito from "./ButtonAñadirCarrito";
export default function Card({opcion}) {

  return (
    <div className="lg:w-[23%] md:w-1/2 p-4 w-full mb-3 border-lg bg-white rounded-lg shadow shadow-gray-300/50 h-[450px]" key={opcion.id}>
              <Link className="block relative h-64  rounded overflow-hidden"
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
                <Link className="block relative rounded overflow-hidden"
                href={'/store/'+opcion.id}
              > {opcion.category}</Link>
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {opcion.item}
                </h2>
              </div>
              <div className="flex items-center justify-around">
                <p className="mt-1">${opcion.price}</p>

            <ButtonAñadirCarrito
            item={opcion}
            />
              </div>
            </div>
  )
}
