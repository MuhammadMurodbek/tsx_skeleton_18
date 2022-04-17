import axios from "axios"
import {useQuery} from "react-query"
import { urls } from "../../config"

type cityProp = {
    city:string
}

const requestFunction = (city:cityProp) => {
    return axios.get(urls.searchCity+`?q=${city?.city}&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric`)
}

export const useQueryCities = (city:cityProp) => {
    return useQuery(['search_city', city],()=>requestFunction(city), {enabled:false})
}