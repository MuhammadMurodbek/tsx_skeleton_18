import create from "zustand"
import { SearchState } from "../../entities/types/zustand.search"
import { persist } from "zustand/middleware"


var store = (set:any) => ({
    searchGlobal: { lat: 41.2646, lon: 69.2163, load: false },
    setSearchGlobal: (data:any) => set({ searchGlobal: data })
})

export const useSearchStore = create<SearchState>(persist(store,{name:'search'}))