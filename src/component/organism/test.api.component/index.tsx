import {FC} from 'react'
import { Container } from './style'
import ErrorContainer from "../../molecules/error.container"

const Index:FC = ({children, isLoading, status, error, refetch}:any) => {
    const objError = {
        refetch:refetch,
        data:error
    }
    // console.log(refetch)
    return (
        <Container>
            {isLoading && children}
            {status === 'success' && children}
            {error && <ErrorContainer {...objError}/>}
        </Container>
    )
}

export default Index
