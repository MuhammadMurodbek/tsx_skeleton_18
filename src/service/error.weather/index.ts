import create from "zustand"
import { ErrorType } from "../../entities/types/zustand.error"
import { persist } from "zustand/middleware"


var store = (set:any) => ({
    state: { state:false },
    setState: (data:any) => set(data)
})

export const useErrorWeather = create<ErrorType>(persist(store,{name:'errorcheck'}))