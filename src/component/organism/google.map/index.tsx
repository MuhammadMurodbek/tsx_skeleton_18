import {FC} from 'react'
import { Wrapper } from './style'
import GoogleMap from "../../molecules/google.map"
import {useSearchStore} from "../../../service/search"
const Index:FC = () => {
    const stateSearch = useSearchStore(state=>state.searchGlobal)
    return (
        <Wrapper>
            <GoogleMap {...stateSearch}/>
        </Wrapper>
    )
}

export default Index
