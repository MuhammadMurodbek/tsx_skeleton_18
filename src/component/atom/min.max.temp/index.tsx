import {FC} from 'react'
import {Container} from "./style"
import {Combined} from "../../../entities/types/min.max"
import Min from "../../../assets/min.max.png"
// import Max from "../../../assets/max.png"

const Index:FC<Combined> = ({data, type}) => {
    return (
        <Container>
            <div className="temp_number">
                {type === 'max' && <img src={Min} alt="min"/>}
                {type === 'min' && <img src={Min} alt="max" className="rotate"/>}
                <span>{data?.toFixed()}°C</span>
            </div>
        </Container>
    )
}

export default Index
