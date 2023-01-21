const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '517687125fmshd82e52b51ca55f0p1024b9jsn38a3da735956',
		'X-RapidAPI-Host': 'aliexpress-product1.p.rapidapi.com'
	}
};


export default async function fetchApi() {
    const res= await fetch('https://aliexpress-product1.p.rapidapi.com/scraper?productId=32984931216', options)

    return res.json()
}


