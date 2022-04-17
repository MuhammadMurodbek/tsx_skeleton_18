import {FC} from 'react'
import {Container} from "./style"
import {Combined} from "../../../entities/types/min.max"
import Min from "../../../assets/min.max.png"
// import Max from "../../../assets/max.png"

const Index:FC<Combined> = ({data, type}) => {
    return (
        <Container>
            <div className="temp_number">
                <span>{type}</span>
                <span className="temp">{data?.toFixed()}°C</span>
            </div>
        </Container>
    )
}

export default Index
