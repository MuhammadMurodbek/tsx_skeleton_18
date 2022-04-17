import {FC, useEffect} from 'react'
import { Wrapper } from './style'
import {useSearchStore} from "../../service/search"
import MainApplication from "../../component/template/main.container"
import {useQueryWeather} from "../../queries/query.weather"

const Index:FC = () => {
    const searchState = useSearchStore(state=>state.searchGlobal)
    const {data, refetch} = useQueryWeather(searchState)
    useEffect(() => {
       if(searchState.hasOwnProperty('lat')){
           refetch()
       }
    }, [searchState])
    console.log(searchState)
    return (
        <Wrapper>
            <MainApplication/>
        </Wrapper>
    )
}

export default Index
