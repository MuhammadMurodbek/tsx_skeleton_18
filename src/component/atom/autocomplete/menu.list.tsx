import { FC } from 'react'
import { MenuListComponent } from "./style"
import CountryFlag from "../country.flag"
import CloudIcon from "./cloud"

interface latLong {
    lat?: number,
    lon?: number,
}

interface dataPropList {
    name: string,
    sys: any,
    coord: latLong,
    main: any,
    rain: object | null,
    snow: object | null,
    clouds: any,
}

const MenuList: FC<dataPropList> = ({ name, sys, main, coord, rain, snow, clouds }) => {
    var IconWeather: string = ''
    if (rain !== null) IconWeather = 'rain'
    if (snow !== null) IconWeather = 'snow'
    if (clouds?.all < 20) IconWeather = 'sun'
    if (clouds?.all > 20 && clouds?.all < 70) IconWeather = 'cloudy'
    if (clouds?.all > 70) IconWeather = 'cloud'
    return (
        <MenuListComponent>
            <div className="main">
                <div className="name">{name}</div>
                <div className="country">{sys?.country}</div>
                <CountryFlag code={sys?.country} />
            </div>
            <div>{(main?.temp - 273).toFixed()}°C</div>
            <CloudIcon IconWeather={IconWeather} />
            <div className="coordinate">{coord?.lat?.toFixed(2) + " " + coord?.lon?.toFixed(2)}</div>
        </MenuListComponent>
    )
}

export default MenuList
