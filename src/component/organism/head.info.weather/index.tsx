import React,{FC} from 'react'
import {Container} from "./style"
import {dataProps} from "../../../entities/types/dataApiProps"
import InfoCity from "../../molecules/info.content.up"
import InfoMainWeather from "../../molecules/info.content.down"
import InfoBottomTitle from "../../atom/info.bottom.text"

const Index:FC<dataProps> = ({data}) => {
    return (
        <Container>
            <div>
                <InfoCity data={data}/>
                <InfoMainWeather data={data}/>
            </div>
            {/* <InfoBottomTitle/> */}
        </Container>
    )
}

export default Index
