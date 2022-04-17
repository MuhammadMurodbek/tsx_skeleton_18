import {FC} from 'react'
import {Container} from "./style"
import {dataProps} from "../../../entities/types/dataApiProps"

interface customProps extends dataProps {
    title?:string,
    symbol:string
}
const Index:FC<customProps> = ({data, title, symbol}) => {
    return (
        <Container>
            <div className="time_zone">{title}: {data+symbol}</div>
        </Container>
    )
}

export default Index
