import React,{FC} from 'react'
import {Container} from "./style"
import TitleHead from "../../atom/title.city"
import TemparatureInfo from "../../atom/temperature"
import {dataProps} from "../../../entities/types/dataApiProps"
import MinMaxTemp from "../../atom/min.max.temp"

const Index:FC<dataProps> = ({data}) => {
    console.log(data)
    return (
        <Container>
            <TitleHead/>
            <TemparatureInfo data={data}/>
            <div className="min_max">
                <MinMaxTemp type="min" data={data?.daily[0]?.temp?.max}/>
                <MinMaxTemp type="max" data={data?.daily[0]?.temp?.min}/>
            </div>
        </Container>
    )
}

export default Index
