import {FC} from 'react'
import { Wrapper, FormWrapper, MapWrapper, InfoWrapper } from './style'
import GoogleMap from "../../organism/google.map"
import FormComponent from "../../organism/form.side"
import ModalContainer from "../../atom/modal"

const Index:FC = () => {
    return (
        <Wrapper>
            <FormWrapper>
                <FormComponent/>
            </FormWrapper>
            <InfoWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero excepturi repellendus, dolores minima pariatur laborum facilis recusandae impedit. Accusamus expedita eius laborum nemo itaque totam sapiente rem at dolorem placeat, laboriosam excepturi hic molestiae cumque! Quaerat excepturi, consequatur ratione eveniet illo nulla aliquid magni error similique odio obcaecati unde necessitatibus iure nam harum officiis labore minima veniam ullam esse aut sit molestias ipsam eligendi? Placeat, iusto aliquam ratione praesentium est repellendus blanditiis, odio sed aspernatur porro, sapiente dolorum? Eos illum voluptate nisi ut corrupti libero adipisci eveniet. Tempora nemo reprehenderit saepe sunt nihil doloremque nisi molestiae sit necessitatibus, distinctio sequi asperiores assumenda hic quos optio ducimus inventore? Eaque dolores hic qui possimus corporis enim magni est cumque, exercitationem veritatis maiores. Labore ab aut reiciendis ducimus alias quam. Quae cupiditate dignissimos enim. Explicabo tempora harum soluta ratione, praesentium officia facilis commodi aperiam, optio nisi maxime blanditiis perspiciatis, veritatis odio quia rerum. Velit quaerat ex alias explicabo beatae debitis at doloribus deleniti repellat dolore? Dolorum veniam ullam nihil excepturi sed quam. Iure, repellat placeat? Harum amet eius deserunt modi ad. Nisi dicta minus nemo fuga, eligendi tempora minima expedita delectus, quos hic dolorum sapiente dignissimos error magni exercitationem doloremque, laborum ex.
                <MapWrapper>
                    <GoogleMap/> 
                </MapWrapper>
            </InfoWrapper>
            <ModalContainer/>
        </Wrapper>
    )
}

export default Index
