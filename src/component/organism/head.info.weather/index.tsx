import { FC } from 'react'
import { propsObj } from "./const"
import { Container } from "./style"
import InfoCity from "../../molecules/info.content.up"
import Skeleton from "../../../widgets/skeletons/check.load"
import { dataProps } from "../../../entities/types/dataApiProps"
import InfoMainWeather from "../../molecules/info.content.down"

const Index: FC<dataProps> = ({ data, dinamic, queryId, isLoading }) => {
    var newObj = { ...propsObj, loading: isLoading }
    return (
        <Skeleton {...newObj}>
            <Container>
                <div>
                    <InfoCity data={data} dinamic={dinamic} queryId={queryId} />
                    <InfoMainWeather data={data} dinamic={dinamic} queryId={queryId} />
                </div>
            </Container>
        </Skeleton>
    )
}

export default Index
