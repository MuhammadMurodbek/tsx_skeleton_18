import create from "zustand"
import {daysProps} from "../../entities/types/zustand.days"
import { persist } from "zustand/middleware"

var store = (set:any) => ({
    data: {},
    setDaysGlobal: (item:any) => set({data:item})
})

export const useDaysStore = create<daysProps>(persist(store,{name:"day_store"}))