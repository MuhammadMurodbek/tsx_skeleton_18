import { FC, useEffect } from 'react'
import { Wrapper } from './style'
import { useSearchStore } from "../../service/search"
import { useDaysStore } from "../../service/days.store"
import {useErrorWeather} from "../../service/error.weather"
import MainApplication from "../../component/template/main.container"
import { useQueryWeather } from "../../queries/query.weather"
import {errorText} from "./fnts"

const Index: FC = () => {
    
    const searchState = useSearchStore(state => state.searchGlobal)
    const setStateDays = useDaysStore(state => state.setDaysGlobal)
    const setErrorWeather = useErrorWeather(state=>state.setState)
    const { data, refetch, isLoading, status,error, isError } = useQueryWeather(searchState)
    
    useEffect(() => {if (searchState.hasOwnProperty('lat')) { refetch() }}, [searchState])
    useEffect(() => { 
        if (data) setStateDays(data?.data) 
        if(status==='error'){setErrorWeather({check:true})}
        else setErrorWeather({check:false})
    }, [data, status])
    

    return (
        <Wrapper>
            <MainApplication 
                data={data?.data} 
                isLoading={isLoading}
                refetch={refetch}
                status={status}
                error={errorText(error)}
            />
        </Wrapper>
    )
}

export default Index
