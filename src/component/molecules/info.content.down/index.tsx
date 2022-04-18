import {FC} from 'react'
import {Container} from "./style"
import InfoTitle from "../../atom/info.title.forecast"
import InfoMainWeather from "../../atom/item.info.forecast"
import {dataProps} from "../../../entities/types/dataApiProps"
import DailyWeather from "../../atom/daily.time"

const Index:FC<dataProps> = ({data, typeDay, typeValue}) => {    
    return (
        <Container>
            <InfoTitle data={data} typeDay={typeDay} typeValue={typeValue}/>
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
            <div className="daily">
                <DailyWeather data={data?.daily[0]?.temp?.morn} type="Morning"/>
                <DailyWeather data={data?.daily[0]?.temp?.day} type="Day"/>
                <DailyWeather data={data?.daily[0]?.temp?.eve} type="Evening"/>
                <DailyWeather data={data?.daily[0]?.temp?.night} type="Night"/>
            </div>
        </Container>
    )
}

export default Index
