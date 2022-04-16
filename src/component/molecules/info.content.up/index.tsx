import React,{FC} from 'react'
import {Container} from "./style"
import TitleHead from "../../atom/title.city"
import TemparatureInfo from "../../atom/temperature"

const Index:FC = () => {
    return (
        <Container>
            <TitleHead/>
            <TemparatureInfo/>
        </Container>
    )
}

export default Index
