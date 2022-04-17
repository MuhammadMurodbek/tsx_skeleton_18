export const weatherIcon = ({rain, snow, clouds}:any) => {
    // console.log(clouds)
    let IconWeather: string = ''
    if (rain && rain !== null) return 'rain'
    else if (rain && snow !== null) return 'snow'
    else if (clouds < 20) return 'sun'
    else if (clouds > 20 && clouds < 70) return 'cloudy'
    else if (clouds > 70) return 'cloud'

    return IconWeather
}