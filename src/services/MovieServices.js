import axios from "axios"
import { BASE_URL, ENDPOINTS, API_KEY, KP_API_KEY } from "../constants/MovieApi"



export const getNowShowingMovies = async ()=>{
     const response = await axios.get(
        `https://63b42a39ea89e3e3db5848a5.mockapi.io/${ENDPOINTS.NOW_SHOWING}`

    )
    return response
}
export const getGenres = async ()=>{
    const response = await axios.get(
        `https://63b42a39ea89e3e3db5848a5.mockapi.io/${ENDPOINTS.GENRES}`
    )
    return response
}
export const getComingMovies = async ()=>{
    const response = await axios.get(
        `https://63b42a39ea89e3e3db5848a5.mockapi.io/${ENDPOINTS.UPCOMING}`
    )
    return response
}

export const getMovieDetail = async (title)=>{
    const response = await axios.get(
        `api.kinopoisk.dev/movie?search=${title}&field=${ENDPOINTS.NAME}&token=${KP_API_KEY}&isStrict=false`
    )
}