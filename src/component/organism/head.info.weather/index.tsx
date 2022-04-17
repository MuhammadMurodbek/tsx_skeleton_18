import React,{FC} from 'react'
import {Container} from "./style"
import InfoCity from "../../molecules/info.content.up"
import InfoMainWeather from "../../molecules/info.content.down"
import InfoBottomTitle from "../../atom/info.bottom.text"

const Index:FC = () => {
    return (
        <Container>
            <div>
                <InfoCity/>
                <InfoMainWeather/>
            </div>
            <InfoBottomTitle/>
        </Container>
    )
}

export default Index
