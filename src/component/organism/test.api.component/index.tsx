import {FC} from 'react'
import { Container } from './style'
import ErrorContainer from "../../molecules/error.container"

const Index:FC = ({children, isLoading, status, error, refresh, data }:any) => {
    // console.log(status)
    return (
        <Container>
            {isLoading && children}
            {status === 'success' && children}
            {error && 
                <div>
                    error compiling
                </div>}
            {/* <ModalContainer/> */}
        </Container>
    )
}

export default Index
