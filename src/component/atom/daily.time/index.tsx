import {FC} from 'react'
import {Container} from "./style"
import {Combined} from "../../../entities/interfaces/min.max"

const Index:FC<Combined> = ({data, type, typeDay, typeValue}) => {
    return (
        <Container term={type}>
            <div className="temp_number">
                <span>{typeDay ? typeValue?.type : type}</span>
                <span className="temp">{typeDay ? typeValue?.data?.toFixed(): data?.toFixed()}°C</span>
            </div>
        </Container>
    )
}

export default Index
