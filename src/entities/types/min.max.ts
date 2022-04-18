import {dataProps} from "./dataApiProps"
export interface Combined extends dataProps {
    type?:string,
    typeDay?:boolean,
    typeValue?:any
}