import {FC} from 'react'
import {Container} from "./style"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type dataProps = {
    count:number,
    width:number,
    height:number
}

const Index:FC<dataProps> = ({count, width, height}) => {
    return (
        <Container>
            <Skeleton 
                count={count} 
                width={width} 
                height={height}
            />
        </Container>
    )
}

export default Index
