import {FC} from 'react'
import {Container} from "./style"
import {dataProps} from "../../../entities/types/dataApiProps"
import {LineChart} from "../../molecules/line.chart"
const Index:FC<dataProps> = ({data}:any) => {
    // console.log(data)
    return (
        <Container>
            <LineChart rowData={data} />
        </Container>
    )
}

export default Index
