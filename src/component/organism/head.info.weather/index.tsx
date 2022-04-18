import {FC} from 'react'
import {Container} from "./style"
import {dataProps} from "../../../entities/types/dataApiProps"
import InfoCity from "../../molecules/info.content.up"
import InfoMainWeather from "../../molecules/info.content.down"

const Index:FC<dataProps> = ({data, dinamic, queryId}) => {
    return (
        <Container>
            <div>
                <InfoCity data={data} dinamic={dinamic} queryId={queryId}/>
                <InfoMainWeather data={data} dinamic={dinamic} queryId={queryId}/>
            </div>
        </Container>
    )
}

export default Index
