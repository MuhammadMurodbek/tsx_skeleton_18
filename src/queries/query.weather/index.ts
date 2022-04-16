import { useQuery } from "react-query"
import { urls } from "../../config"
import axios from "axios"

const Index = () => {
    const fetchApiData = () => {
        return axios.get(urls?.oneCall)
    }
    const onSuccess = () => {
        alert('success')
    }
    return useQuery<any, Error>(
        'root_query',
        fetchApiData,
        {
            refetchOnWindowFocus: false,
            staleTime: 10000,
            onSuccess: onSuccess
        }
    )
}

export default Index
