import React,{FC} from 'react'
import {Container} from "./style"
import TitleHead from "../../atom/title.city"
import TemparatureInfo from "../../atom/temperature"
import {dataProps} from "../../../entities/types/dataApiProps"

const Index:FC<dataProps> = ({data}) => {
    return (
        <Container>
            <TitleHead/>
            <TemparatureInfo data={data}/>
        </Container>
    )
}

export default Index
