import {fetchApi,getSliceItems} from "../../services/itemsServices";
import Image from "next/image";

export default async function Store() {
  const data = await getSliceItems();

  console.log(data);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data?.map((opcion) => (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={opcion.id}>
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                width={"100"}
                height="100"
                  alt={opcion.item}
                  className="object-cover object-center w-full h-full block"
                  src={opcion.image_url}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {opcion.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {opcion.item}
                </h2>
                <p className="mt-1">${opcion.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
