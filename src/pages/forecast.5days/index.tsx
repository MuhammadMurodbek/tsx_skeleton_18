import { FC, useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import HeadInfoWeather from "../../component/organism/head.info.weather"
import { useDaysStore } from "../../service/days.store"
import { Container } from './style'
import { queryParser } from "../../hooks/query.parser"

const Index: FC = () => {

    const location = useLocation()
    const stateDays = useDaysStore(state => state.data)
    const [state, setState] = useState<number>(0)
    useEffect(() => {
        setState(queryParser(location?.search)?.id)
    }, [location])

    return (
        <Container>
            <HeadInfoWeather
                dinamic={true}
                data={stateDays}
                queryId={state}
            />
        </Container>
    )
}

export default Index
