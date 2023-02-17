import ItemsCategorias from "./ItemsCategorias";
import {interfaceItem}from '../types/tyoes'
export default   function UlCategoriasSidebar({data}:any)  {

    const extraerCategorias = (data:any[]) => {
      const array:any[] = [];
      data?.filter((item:interfaceItem) => {
        const find = array.find((prod) => prod == item.category);
        if (find) return;
        else {
          array.push(item.category);
        }
      });
      return array;
    };

    const categorias:any[] = extraerCategorias(data)


    return (
      <>
      {
        categorias?.map((cat,i)=>(
    <ul className="flex flex-col w-10/12  text-gray-500">
      <ItemsCategorias name={cat} key={i} imgSrc={""} data={data} />
    </ul>

        ))
      }
    </>
  );
}
