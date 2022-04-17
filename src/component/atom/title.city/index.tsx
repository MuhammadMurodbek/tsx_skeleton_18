import {FC} from 'react'
import {Container} from "./style"
import {useSearchStore} from "../../../service/search"
const Index:FC = () => {
    const stateSearch = useSearchStore(state=>state.searchGlobal)
    return (
        <Container>
            <div className="time_zone">{new Date().toDateString()}</div>
            <div className="title_city">{stateSearch?.name ||  'Tashkent'}</div>
        </Container>
    )
}

export default Index
