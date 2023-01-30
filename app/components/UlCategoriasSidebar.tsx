import { getItems } from "../../services/itemsServices";
import ItemsCategorias from "./ItemsCategorias";
export default async  function UlCategoriasSidebar({  }) {


    const data = await getItems();

    const extraerCategorias = () => {
      const array = [];
      data.filter((item) => {
        const find = array.find((prod) => prod == item.category);
        if (find) return;
        else {
          array.push(item.category);
        }
      });
      return array;
    };
  const traerCategoria=(name,data)=>{
    const array=[data.filter((element=>element.category==name))]
  console.log(name)
  return name
  
  }
    const categorias = extraerCategorias(data)
    const productos= extraerCategorias()
  
  const handleAlert=()=>{
    alert('hola')
  }
  
  return categorias?.map((cat, i) => (
    <ul className="flex flex-col w-10/12 text-gray-500">
      <ItemsCategorias name={cat} key={i} imgSrc={""} data={data}  />
    </ul>
  ));
}
