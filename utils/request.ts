const API_KEY:string|undefined=process.env.NEXT_PUBLIC_API_KEY
const BASE_URL:string="https://api.themoviedb.org/3"

interface Irequest {
    fetchTranding:string
    fetchNetflixOriginal:string
    fetchTopRated :string
    fetchActionMovies :string
    fetchComedyMovies :string
    fetchHorrorMovies :string
    fetchRomanceMovies :string
    fetchDocumentaries :string
}

 const request:Irequest={
    fetchTranding:`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginal:`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_network=213`,
    fetchTopRated:`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    fetchComedyMovies:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    fetchHorrorMovies:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    fetchRomanceMovies:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    fetchDocumentaries:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,

}

export default request