import create from "zustand"
import {SearchState} from "../../entities/types/zustand.search"

export const useSearchStore = create<SearchState>(set => ({
    searchGlobal: {lat:41.2646, lon:69.2163, load:false},
    setSearchGlobal: data => set({searchGlobal:data})
}))