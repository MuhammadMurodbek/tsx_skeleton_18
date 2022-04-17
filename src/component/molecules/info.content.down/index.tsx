import {FC} from 'react'
import {Container} from "./style"
import InfoTitle from "../../atom/info.title.forecast"
import InfoMainWeather from "../../atom/item.info.forecast"
import {dataProps} from "../../../entities/types/dataApiProps"

const Index:FC<dataProps> = ({data}) => {    
    return (
        <Container>
            <InfoTitle data={data}/>
            <div className="wrap_info">
                <InfoMainWeather title='Humidity' data={data?.current?.humidity} symbol="%"/>
                <InfoMainWeather title='Pressure' data={data?.current?.pressure} symbol="Pa"/>
            </div>
            <div className="wrap_info">
                <InfoMainWeather title='Visibility' data={data?.current?.visibility} symbol="km"/>
                <InfoMainWeather title='Dew point' data={data?.current?.dew_point} symbol="°C"/>
            </div>
            <div className="wrap_info">
                <InfoMainWeather title="UV" data={data?.current?.uvi} symbol=""/>
                <InfoMainWeather title="Wind speed" data={data?.current?.wind_speed} symbol="m/s"/>
            </div>
        </Container>
    )
}

export default Index
