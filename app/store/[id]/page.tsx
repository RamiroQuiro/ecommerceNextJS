import React from "react";
import Productos from "../../components/Products";
import { fetchGoogle } from "../../../services/fetchGoogleSheet";

export default async function Products({ params }: any) {
  const { id } = params;
  const item = await fetchGoogle().then((data) => {
    const item = data?.data.find((idFind: any) => idFind.id == id);
    return item;
  });

  if (!item) return <div>Cargando maan...</div>;
  return <Productos showAs="" key={item.id} item={item} />;
}
