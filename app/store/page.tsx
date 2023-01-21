import  fetchApi from "../../services/itemsServices";

export default async function Store() {

const data =await fetchApi()

console.log(data)
  return (
    <div>Store</div>
  )
}
