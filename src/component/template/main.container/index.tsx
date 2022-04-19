import { FC } from 'react'
import { Wrapper, FormWrapper, MapWrapper, InfoWrapper } from './style'
import GoogleMap from "../../organism/google.map"
import FormComponent from "../../organism/form.side"
import TestApiComponent from "../../organism/test.api.component"
import { dataProps } from "../../../entities/interfaces/dataApiProps"
import HeadInfoWeather from "../../organism/head.info.weather"
import BrushChart from "../../organism/brush.chart.labeled"

const Index: FC<dataProps> = ({ data, isLoading, refetch, status, error }) => {
    var obj = {
        refetch:refetch,
        data:data,
        isLoading:isLoading,
        status:status,
        error:error
    }
    // console.log(refetch)
    return (
        <Wrapper>
            <TestApiComponent {...obj}>
                <>
                    <InfoWrapper>
                        <FormWrapper>
                            <FormComponent />
                            <HeadInfoWeather data={data} isLoading={isLoading}/>
                        </FormWrapper>
                        <MapWrapper>
                            <GoogleMap data={null} isLoading={isLoading}/>
                        </MapWrapper>
                    </InfoWrapper>
                    <BrushChart data={data} isLoading={isLoading}/>
                </>
            </TestApiComponent>
        </Wrapper>
    )
}

export default Index
