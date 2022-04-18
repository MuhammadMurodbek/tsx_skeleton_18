import { FC, useEffect, useState } from 'react'
import { Wrapper } from "./style"
import Select from "react-select";
import MenuList from "./menu.list"
import {useSearchStore} from "../../../service/search"
import { changeDelay } from "../../../hooks/sleep.change"
import { useQueryCities } from "../../../queries/query.cities"

const Index: FC = () => {
    const [timer, setTimer] = useState(null);
    const [list, setList] = useState<any[]>([])
    const [state, setState] = useState<string>('')
    const [value, setValue] = useState<object | null>(null)
    const setSearchGlobal = useSearchStore(state=>state.setSearchGlobal)
    const { data, refetch, isFetching } = useQueryCities({ city: state })

    useEffect(() => { if (state) refetch() }, [state])
    useEffect(() => {
        let dataApi = data?.data?.list?.map((item: any) => {
            return {
                value: item?.name,
                label: <MenuList {...item}/>,
                coord:item?.coord
            }
        })
        setList(dataApi)
    }, [data])

    const handleInputChange = (inputValue: any): any => {
        changeDelay(inputValue, setTimer, timer, setState)
    };
    const handleChange = (e: any) => {
        if(e){
            setValue({ value: e?.value, label: e?.value })
            setSearchGlobal({...e?.coord, load:true, name:e?.value})
        }else{
            setValue(null)
        }
    }
    return (
        <Wrapper>
            <Select
                isClearable
                value={value}
                options={list}
                isLoading={isFetching}
                onChange={handleChange}
                onInputChange={handleInputChange}
                placeholder="Select city"
            />
        </Wrapper>
    )
}

export default Index
