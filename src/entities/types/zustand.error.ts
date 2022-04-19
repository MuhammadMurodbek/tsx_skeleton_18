type stateType = {
    state:boolean
}
export type ErrorType = {
    state:stateType,
    setState:(data: any) => void 
}