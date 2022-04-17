import { FC } from 'react'
import { Container } from "./style"
import { dataProps } from "../../../entities/types/dataApiProps"
import { LineChart } from "../../molecules/line.chart"
import { Barchart } from "../../molecules/bar.chart"

const Index: FC<dataProps> = ({ data }: any) => {
    return (
        <Container>
            <div><LineChart rowData={data}/></div>
            <div><Barchart rowData={data}/></div>
        </Container>
    )
}

export default Index
