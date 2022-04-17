import {FC} from 'react'
import Sun from "../../../assets/sun.png"
import Clouds from "../../../assets/clouds.png"
import Cloudy from "../../../assets/cloudy.png"
import Rain from "../../../assets/rain.png"
import SnowFlake from "../../../assets/snowflake.png"

type dataProps = {IconWeather:string}

const Cloud:FC<dataProps> = ({IconWeather}) => {
   
    return (
        <div className="icon_cloud">
            {IconWeather === 'sun' && <img src={Sun} alt="sun"/>}
            {IconWeather === 'cloudy' && <img src={Cloudy} alt="sun"/>}
            {IconWeather === 'cloud' && <img src={Clouds} alt="sun"/>}
            {IconWeather === 'rain' && <img src={Rain} alt="sun"/>}
            {IconWeather === 'snow' && <img src={SnowFlake} alt="sun"/>}
        </div>
    )
}

export default Cloud
