import {FC} from 'react'
import {Container} from "./style"
import TitleHead from "../../atom/title.city"
import TemparatureInfo from "../../atom/temperature"
import {dataProps} from "../../../entities/interfaces/dataApiProps"
import MinMaxTemp from "../../atom/min.max.temp"

const Index:FC<dataProps> = ({data, dinamic, queryId}) => {
    return (
        <Container>
            <TitleHead data={null} dinamic={dinamic} queryId={queryId}/>
            <TemparatureInfo data={data} dinamic={dinamic} queryId={queryId}/>
            <div className="min_max">
                <MinMaxTemp type="min" data={data?.daily[queryId || 0]?.temp?.max}/>
                <MinMaxTemp type="max" data={data?.daily[queryId || 0]?.temp?.min}/>
            </div>
        </Container>
    )
}

export default Index
