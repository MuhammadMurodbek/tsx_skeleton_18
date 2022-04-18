import {FC, useEffect} from 'react'
import { Wrapper } from './style'
import {useSearchStore} from "../../service/search"
import {useDaysStore} from "../../service/days.store"
import MainApplication from "../../component/template/main.container"
import {useQueryWeather} from "../../queries/query.weather"

const Index:FC = () => {
    const searchState = useSearchStore(state=>state.searchGlobal)
    const setStateDays = useDaysStore(state=>state.setDaysGlobal)
    const {data, refetch} = useQueryWeather(searchState)
    useEffect(() => {
        if(searchState.hasOwnProperty('lat')){ refetch()}
    }, [searchState])
    useEffect(() => {if(data) setStateDays(data?.data)}, [data])
    return (
        <Wrapper>
            <MainApplication data={data?.data}/>
        </Wrapper>
    )
}

export default Index
