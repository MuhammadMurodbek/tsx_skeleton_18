import { FC } from 'react'
import { Container } from "./style"
import { dataProps } from "../../../entities/types/dataApiProps"

interface customProps extends dataProps {
    title?: string,
    symbol: string
}
const Index: FC<customProps> = ({ data, title, symbol, typeDay, typeValue }) => {
    return (
        <Container>
            <div className="time_zone">
                {typeDay ? typeValue?.title : title}: {typeDay ? (typeValue?.data + typeValue?.symbol) : data + symbol}
            </div>
        </Container>
    )
}

export default Index
