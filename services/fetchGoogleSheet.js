import Papa from "papaparse"




export async function fetchGoogle() {
    const respuesta=await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRYJ573ZbGydZrP0DO7ketBa34ACY2f25aJq8VTLRyPNqsTTPC5clB8XKn5_0cbM8UKkq-0sS9cmDRj/pub?gid=0&single=true&output=csv').then(res=>{
    return res.text()
}).then(text=>{
    return Papa.parse(text,{
        header:true,
    })
})
return respuesta
}



