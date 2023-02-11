import { fetchGoogle } from "../../services/fetchGoogleSheet";
import ItemsCategorias from "./ItemsCategorias";
export default async  function UlCategoriasSidebar({  }) {


    const data = await fetchGoogle();

    const extraerCategorias = () => {
      const array = [];
      data?.data.filter((item) => {
        const find = array.find((prod) => prod == item.category);
        if (find) return;
        else {
          array.push(item.category);
        }
      });
      return array;
    };


    const categorias = extraerCategorias(data?.data)


  return categorias?.map((cat, i) => (
    <ul className="flex flex-col w-10/12 text-gray-500">
      <ItemsCategorias name={cat} key={i} imgSrc={""} data={data?.data} />
    </ul>
  ));
}
