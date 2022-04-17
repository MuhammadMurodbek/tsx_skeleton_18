export type searchStateType = {
    lat:number,
    lon:number,
    load:boolean,
    name?:string
}

export type SearchState = {
    searchGlobal: searchStateType,
    setSearchGlobal: (data: any) => void 
}