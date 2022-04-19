import {FC} from 'react'
import {Container, ButtonRefresh} from "./style"
import Error from "../../../assets/error.png"
import FormAutoComplete from "../../organism/form.side"

const Index:FC<any> = ({refetch, data}:any) => {
    console.log(refetch)
    return (
        <Container>
            <div className="select"><FormAutoComplete/></div>
            <div className="wrapper">
                <img src={Error} alt="error"/>
                <div className="title">{data}</div>
                <div className="text">Something went wrong.</div>
                <ButtonRefresh onClick={()=>refetch()}>Refresh</ButtonRefresh>
            </div>
        </Container>
    )
}

export default Index
