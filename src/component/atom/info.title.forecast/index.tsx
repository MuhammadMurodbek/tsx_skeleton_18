import React,{FC} from 'react'
import {Container} from "./style"
import {dataProps} from "../../../entities/types/dataApiProps"

const Index:FC<dataProps> = ({data}) => {
    return (
        <Container>
            <div className="time_zone">Feels like {data?.current?.temp?.toFixed()}°C <span>{data?.current?.weather[0]?.description}</span></div>
        </Container>
    )
}

export default Index
