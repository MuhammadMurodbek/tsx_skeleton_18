import {FC} from 'react'
import HeadInfoWeather from "../../component/organism/head.info.weather"
import {useDaysStore} from "../../service/days.store"
import { Container } from './style'

const Index:FC = () => {
    const stateDays = useDaysStore(state=>state.data)
    console.log(stateDays)
    return (
        <Container>
            {/* <HeadInfoWeather data={stateDays}/> */}
        </Container>
    )
}

export default Index
