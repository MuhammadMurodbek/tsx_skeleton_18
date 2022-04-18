import {FC} from 'react'
import { Wrapper, FormWrapper, MapWrapper, InfoWrapper } from './style'
import GoogleMap from "../../organism/google.map"
import FormComponent from "../../organism/form.side"
import ModalContainer from "../../atom/modal"
import {dataProps} from "../../../entities/types/dataApiProps"
import HeadInfoWeather from "../../organism/head.info.weather"
import BrushChart from "../../organism/brush.chart.labeled"

const Index:FC<dataProps> = ({data, isLoading}) => {
    return (
        <Wrapper>
            <InfoWrapper>
                <FormWrapper>
                    <FormComponent />
                    <HeadInfoWeather 
                        data={data}
                        isLoading={isLoading}
                    /> 
                </FormWrapper>
                <MapWrapper>
                    <GoogleMap/> 
                </MapWrapper>
            </InfoWrapper>
            <ModalContainer/>
            <BrushChart data={data} isLoading={isLoading}/>
        </Wrapper>
    )
}

export default Index
