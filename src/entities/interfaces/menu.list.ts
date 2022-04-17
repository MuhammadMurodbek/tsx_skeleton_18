export interface latLong {
    lat?: number,
    lon?: number,
}

export interface dataPropList {
    name: string,
    sys: any,
    coord: latLong,
    main: any,
    rain: object | null,
    snow: object | null,
    clouds: any,
}
