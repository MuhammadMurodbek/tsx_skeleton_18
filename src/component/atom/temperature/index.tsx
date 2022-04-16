import React,{FC} from 'react'
import {Container} from "./style"

const Index:FC = () => {
    return (
        <Container>
            <div className="temp_number">0°C</div>
            <button className="show_more">Read more...</button>
        </Container>
    )
}

export default Index
