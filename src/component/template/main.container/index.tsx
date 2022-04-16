import {FC} from 'react'
import { Wrapper, FormWrapper, MapWrapper, InfoWrapper } from './style'
import GoogleMap from "../../organism/google.map"
import FormComponent from "../../organism/form.side"
import ModalContainer from "../../atom/modal"
import HeadInfoWeather from "../../organism/head.info.weather"

const Index:FC = () => {
    return (
        <Wrapper>
            <FormWrapper>
                <FormComponent/>
            </FormWrapper>
            <InfoWrapper>
                <HeadInfoWeather/>
                <MapWrapper>
                    <GoogleMap/> 
                </MapWrapper>
            </InfoWrapper>
            <ModalContainer/>
        </Wrapper>
    )
}

export default Index