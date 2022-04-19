import { FC, useEffect } from 'react'
import { Wrapper } from './style'
import { useSearchStore } from "../../service/search"
import { useDaysStore } from "../../service/days.store"
import MainApplication from "../../component/template/main.container"
import { useQueryWeather } from "../../queries/query.weather"
import {errorText} from "./fnts"

const Index: FC = () => {
    
    const searchState = useSearchStore(state => state.searchGlobal)
    const setStateDays = useDaysStore(state => state.setDaysGlobal)
    const { data, refetch, isLoading, status,error } = useQueryWeather(searchState)
    
    useEffect(() => {if (searchState.hasOwnProperty('lat')) { refetch() }}, [searchState])
    useEffect(() => { if (data) setStateDays(data?.data) }, [data])
    // console.log(error)
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
