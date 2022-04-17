import {FC} from 'react'
import ReactCountryFlag from "react-country-flag"

type flagProp = {
    code:string
}

const Index:FC<flagProp> = ({code}) => {
    return (
        <div className="flag">
             <ReactCountryFlag countryCode={code} svg />
        </div>
    )
}

export default Index
