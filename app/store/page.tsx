import {getSliceItems} from "../../services/itemsServices";

export default async function Store() {

  return (
    <section className="text-gray-600 body-font w-10/12">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap gap-3 mx-auto justify-around items-center">
          {/* {data?.map((opcion) => (
           <Card
           opcion={opcion}
           />
          ))} */}
        </div>
      </div>
    </section>
  );
}
