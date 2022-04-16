import axios from "axios"
import {useQuery} from "react-query"
import {urls} from "../../config"
const Index = () => {
    const fetchApiData = () => {
        return axios.get(urls?.oneCall)
    }
    const onSuccess = () => {
        alert('success')
    }
    const {isLoading, data, isFetching, isError, error} = useQuery<any, Error>(
        'root_query', 
        fetchApiData, 
        {
            refetchOnWindowFocus:false,
            staleTime:10000,
            onSuccess:onSuccess
        }
    )

    if(isLoading){
        return <div>Loading...</div>
    }
    return (
        <div>
            {isError && <div>{JSON.stringify(error)}</div>}
        </div>
    )
}

export default Index
