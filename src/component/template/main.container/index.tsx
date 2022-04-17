import {FC} from 'react'
import { Wrapper, FormWrapper, MapWrapper, InfoWrapper } from './style'
import GoogleMap from "../../organism/google.map"
import FormComponent from "../../organism/form.side"
import ModalContainer from "../../atom/modal"
import {dataProps} from "../../../entities/types/dataApiProps"
import HeadInfoWeather from "../../organism/head.info.weather"

const Index:FC<dataProps> = ({data}) => {
    return (
        <Wrapper>
            <InfoWrapper>
                <FormWrapper>
                    <FormComponent />
                    <HeadInfoWeather data={data}/> 
                </FormWrapper>
                <MapWrapper>
                    <GoogleMap/> 
                </MapWrapper>
            </InfoWrapper>
            <ModalContainer/>
        </Wrapper>
    )
}

export default Index
