import React,{FC} from 'react'
import {Container} from "./style"
import InfoCity from "../../molecules/info.content.up"
import InfoMainWeather from "../../molecules/info.content.down"

const Index:FC = () => {
    return (
        <Container>
            <InfoCity/>
            <InfoMainWeather/>
        </Container>
    )
}

export default Index
