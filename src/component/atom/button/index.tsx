import {FC} from 'react'
import { NavLink } from 'react-router-dom'
import {Container} from "./style"

type btnProp = {
    title:string,
    id:number
}

const Index:FC<btnProp> = ({title,id}) => {
    return (
        <Container>
            <NavLink className="button" to={`/${title}?id=${id}`}>{title}</NavLink>
        </Container>
    )
}

export default Index
