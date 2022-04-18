import { FC } from 'react'
import { Container } from "./style"
import { Combined } from "../../../entities/types/button.type"
import { weatherIcon } from "../../../hooks/functions/weaher.icon"
import Clouds from "../../atom/autocomplete/cloud"

const Index: FC<Combined> = ({ data, dinamic, queryId }) => {
    return (
        <Container>
            <div className="temp_number">
                <Clouds
                    IconWeather={
                        weatherIcon({
                            clouds: dinamic ? data?.daily[queryId || 0]?.clouds : data?.current?.clouds
                        })
                    }
                />
                <span>{dinamic ? data?.daily[queryId || 0]?.temp?.day?.toFixed() : data?.current?.temp?.toFixed()}°C</span>
            </div>
        </Container>
    )
}

export default Index
