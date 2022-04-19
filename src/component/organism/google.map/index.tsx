import {FC} from 'react'
import { Wrapper } from './style'
import GoogleMap from "../../molecules/google.map"
import {useSearchStore} from "../../../service/search"
import Skeleton from "../../../widgets/skeletons/check.load"
import {dataProps} from "../../../entities/types/dataApiProps"

const Index:FC<dataProps> = ({isLoading}) => {
    const stateSearch = useSearchStore(state=>state.searchGlobal)
    var valueObj={
        loading:isLoading,
        width:'560px',
        height:'320px',
        count:1
    }
    return (
        <Wrapper>
            <Skeleton {...valueObj}>
                <GoogleMap {...stateSearch}/>
            </Skeleton>
        </Wrapper>
    )
}

export default Index
