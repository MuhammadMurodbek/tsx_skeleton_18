import {dataProps} from "../interfaces/dataApiProps"
export interface Combined extends dataProps {
    type?:string,
    typeDay?:boolean,
    typeValue?:any
}