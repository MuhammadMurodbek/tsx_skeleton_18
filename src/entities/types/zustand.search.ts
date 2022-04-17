export type searchStateType = {
    lat:number,
    lon:number,
    load:boolean
}

export type SearchState = {
    searchGlobal: searchStateType,
    setSearchGlobal: (data: any) => void 
}