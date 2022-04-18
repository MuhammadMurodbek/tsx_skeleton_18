import { FC } from 'react'
import Skeleton from "./"

const CheckLoad: FC = ({ children, loading, count, width, height }: any) => {
    return (
        <div>
            {
                loading ?
                    <Skeleton count={count} width={width} height={height} />
                    : children
            }
        </div>
    )
}

export default CheckLoad
