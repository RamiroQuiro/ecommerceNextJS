const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '517687125fmshd82e52b51ca55f0p1024b9jsn38a3da735956',
		'X-RapidAPI-Host': 'shopping-data-api.p.rapidapi.com'
	}
};



export  async function fetchApi() {
    const res= await fetch('https://shopping-data-api.p.rapidapi.com/api/show-all-products', options)

    return res.json()
}


export  async function getSliceItems() {
    const items=await fetchApi()
    return items.slice(0,3)
}
