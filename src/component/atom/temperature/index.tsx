import React,{FC} from 'react'
import {Container} from "./style"
import Button from "../button"

type propsData = {
    title?:string
}

const Index:FC<propsData> = ({title}) => {
    return (
        <Container>
            <div className="temp_number">0°C</div>
            <Button>{title}</Button>
        </Container>
    )
}

export default Index
