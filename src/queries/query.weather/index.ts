import axios from "axios"
import {useQuery} from "react-query"
import { urls } from "../../config"
import {searchStateType} from "../../entities/types/zustand.search"

const requestFunction = (stateProps:searchStateType) => {
    return axios.get(`${urls.oneCall}?lat=${stateProps?.lat}&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02`)
            // .then(response=>response)
            // .catch(error=>error?.response)
}

export const useQueryWeather = (stateProps:any) => {
    return useQuery(['search_weather', stateProps],()=>requestFunction(stateProps), {enabled:false})
}
