import { FC } from 'react'
import { Container } from "./style"
import InfoTitle from "../../atom/info.title.forecast"
import InfoMainWeather from "../../atom/item.info.forecast"
import { dataProps } from "../../../entities/interfaces/dataApiProps"
import DailyWeather from "../../atom/daily.time"

const Index: FC<dataProps> = ({ data, dinamic, queryId }) => {
    return (
        <Container>
            <InfoTitle data={data} />
            <div className="wrap_info">
                <InfoMainWeather title='Humidity' data={dinamic ? data?.daily[queryId || 0]?.humidity : data?.current?.humidity} symbol="%" />
                <InfoMainWeather title='Pressure' data={dinamic ? data?.daily[queryId || 0]?.pressure : data?.current?.pressure} symbol="Pa" />
            </div>
            <div className="wrap_info">
                <InfoMainWeather
                    symbol={dinamic ? 'm/s' : "km"}
                    title={dinamic ? 'Wind gust' : 'Visibility'}
                    data={dinamic ? data?.daily[queryId || 0]?.wind_gust : data?.current?.visibility}
                />
                <InfoMainWeather title='Dew point' data={dinamic ? data?.daily[queryId || 0]?.dew_point : data?.current?.dew_point} symbol="°C" />
            </div>
            <div className="wrap_info">
                <InfoMainWeather title="UV" data={dinamic ? data?.daily[queryId || 0]?.uvi : data?.current?.uvi} symbol="" />
                <InfoMainWeather title="Wind speed" data={dinamic ? data?.daily[queryId || 0]?.wind_speed : data?.current?.wind_speed} symbol="m/s" />
            </div>
            <div className="daily">
                <DailyWeather data={data?.daily[queryId || 0]?.temp?.morn} type="Morning" />
                <DailyWeather data={data?.daily[queryId || 0]?.temp?.day} type="Day" />
                <DailyWeather data={data?.daily[queryId || 0]?.temp?.eve} type="Evening" />
                <DailyWeather data={data?.daily[queryId || 0]?.temp?.night} type="Night" />
            </div>
        </Container>
    )
}

export default Index
