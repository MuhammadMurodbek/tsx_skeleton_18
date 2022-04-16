import {FC} from 'react'
import MainApplication from "../../component/template/main.container"
import { Wrapper } from './style'
import RootQ from "../../queries/root"

const Index:FC = () => {
    return (
        <Wrapper>
            <MainApplication/>
            <RootQ/>
        </Wrapper>
    )
}

export default Index
