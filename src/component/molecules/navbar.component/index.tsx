import { FC } from 'react'
import { Container, Wrapper } from "./style"
import Button from "../../atom/button"
import { useDaysStore } from "../../../service/days.store"

const Index: FC = () => {
    const stateDays = useDaysStore(state => state.data)
    function addDays(date: Date, days: number): Date {
        date.setDate(date.getDate() + days);
        return date;
    }
    return (
        <Wrapper>
            <Container>
                {
                    stateDays?.daily?.slice(0, 5)?.map((item: any, index: number) => (
                        <Button key={index} id={index} title={addDays(new Date, index).toLocaleString('en-us', { weekday: 'long' })} />
                    ))
                }
            </Container>
        </Wrapper>
    )
}

export default Index
