import {FC} from 'react'
import {Container} from "./style"
import {Combined} from "../../../entities/types/button.type"
import {weatherIcon} from "../../../hooks/functions/weaher.icon"
import Clouds from "../../atom/autocomplete/cloud"

const Index:FC<Combined> = ({data, typeDay, typeValue}) => {

    var cloud = typeDay ? typeValue?.clouds : data?.current?.clouds
    var temp = typeDay ? typeValue?.temp : data?.current?.temp
    
    return (
        <Container>
            <div className="temp_number">
                <Clouds IconWeather={weatherIcon({clouds: cloud})}/>
                <span>{temp?.toFixed()}°C</span>
            </div>
        </Container>
    )
}

export default Index
