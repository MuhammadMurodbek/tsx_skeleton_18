import { FC } from 'react'
import { Container } from "./style"
import { useSearchStore } from "../../../service/search"
import { dataProps } from "../../../entities/types/dataApiProps"

const Index: FC<dataProps> = ({ dinamic, queryId }) => {
    const stateSearch = useSearchStore(state => state.searchGlobal)
    function addDays(date: Date, days: number): Date {
        date.setDate(date.getDate() + days - 1);
        return date;
    }
    return (
        <Container>
            <div className="time_zone">{dinamic ? addDays(new Date, queryId || 0).toDateString() : new Date().toDateString()}</div>
            <div className="title_city">{stateSearch?.name || 'Tashkent'}</div>
        </Container>
    )
}

export default Index
