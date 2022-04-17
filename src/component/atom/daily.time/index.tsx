import {FC} from 'react'
import {Container} from "./style"
import {Combined} from "../../../entities/types/min.max"

const Index:FC<Combined> = ({data, type}) => {
    return (
        <Container term={type}>
            <div className="temp_number">
                <span>{type}</span>
                <span className="temp">{data?.toFixed()}°C</span>
            </div>
        </Container>
    )
}

export default Index
