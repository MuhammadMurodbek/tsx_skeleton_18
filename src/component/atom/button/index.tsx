import {FC} from 'react'
import { Link } from 'react-router-dom'
import {Container} from "./style"

type btnProp = {
    title:string,
    id:number
}

const Index:FC<btnProp> = ({title,id}) => {
    return (
        <Container>
            <Link className="button" to={`/${title}?id=${id}`}>{title}</Link>
        </Container>
    )
}

export default Index
