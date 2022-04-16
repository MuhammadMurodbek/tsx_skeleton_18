import React,{FC} from 'react'
import {Container} from "./style"
import InfoTitle from "../../atom/info.title.forecast"
import InfoMainWeather from "../../atom/item.info.forecast"

const Index:FC = () => {
    return (
        <Container>
            <InfoTitle/>
            <div className="wrap_info">
                <InfoMainWeather/>
                <InfoMainWeather/>
                <InfoMainWeather/>
                <InfoMainWeather/>
                <InfoMainWeather/>
            </div>
        </Container>
    )
}

export default Index
