import { FC } from 'react'
import { Container } from "./style"
import { dataProps } from "../../../entities/interfaces/dataApiProps"
import { LineChart } from "../../molecules/line.chart"
import { Barchart } from "../../molecules/bar.chart"
import Skeleton from "../../../widgets/skeletons/check.load"
import {loadObj} from "./const"

const Index: FC<dataProps> = ({ data, isLoading }: any) => {
    var newLoad = {loading:isLoading, ...loadObj}
    return (
        <Container>
            <div><Skeleton {...newLoad}><LineChart rowData={data}/></Skeleton></div>
            <div><Skeleton {...newLoad}><Barchart rowData={data}/></Skeleton></div>
        </Container>
    )
}

export default Index
