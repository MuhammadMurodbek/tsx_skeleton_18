import {FC} from 'react'
import Button from "../button"
import {Container} from "./style"
import {Combined} from "../../../entities/types/button.type"
import {weatherIcon} from "../../../hooks/functions/weaher.icon"
import Clouds from "../../atom/autocomplete/cloud"

const Index:FC<Combined> = ({data, title}) => {
    var typeCloud = weatherIcon({...data?.current})
    return (
        <Container>
            <div className="temp_number"><Clouds IconWeather={weatherIcon({clouds:data?.current?.clouds})}/><span>{data?.current?.temp?.toFixed()}°C</span></div>
            {/* <Button>{title}</Button> */}
        </Container>
    )
}

export default Index
