import create from "zustand"
import {daysProps} from "../../entities/types/zustand.days"

export const useDaysStore = create<daysProps>(set => ({
    data: {},
    setDaysGlobal: item => set({data:item})
}))