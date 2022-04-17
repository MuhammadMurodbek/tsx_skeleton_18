import axios from "axios"
import {useQuery} from "react-query"
import { urls } from "../../config"
import {searchStateType} from "../../entities/types/zustand.search"

const requestFunction = (stateProps:searchStateType) => {
    return axios.get(`${urls.oneCall}?lat=${stateProps?.lat}&lon=${stateProps?.lon}&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02`)
}

export const useQueryWeather = (stateProps:any) => {
    return useQuery(['search_weather', stateProps],()=>requestFunction(stateProps), {enabled:false})
}

// // import {useEffect} from "react"
// import { useQuery } from "react-query"
// // import { urls } from "../../config"
// import axios from "axios"

// const Index = () => {
//     const stateSearch = useSearchStore(state=>state.searchGlobal)

//     const fetchApiData = () => {
//         return axios.get(`https://openweathermap.org/data/2.5/onecall?lat=${stateSearch?.lat}&lon=${stateSearch?.lon}&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02`)
//     }
//     const onSuccess = () => {
//         alert('success')
//     }
//     return useQuery<any, Error>(
//         'root_query',
//         fetchApiData,
//         {
//             refetchOnWindowFocus: false,
//             staleTime: 10000,
//             onSuccess: onSuccess,
//             enabled:stateSearch?.load
//         }
//     )
// }

// export default Index
