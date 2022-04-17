import {FC} from 'react'
import Button from "../button"
import {Container} from "./style"
import {buttonProps} from "../../../entities/types/button.type"

const Index:FC<buttonProps> = ({title}) => {
    return (
        <Container>
            <div className="temp_number">0°C</div>
            <Button>{title}</Button>
        </Container>
    )
}

export default Index
