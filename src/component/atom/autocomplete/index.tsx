import { FC } from 'react'
import { Wrapper } from "./style"
import AsyncSelect from "react-select/async";

const Index: FC = () => {
    const options = [
        { value: "Spring", label: "Spring" },
        { value: "Summer", label: "Summer" },
        { value: "Autumn", label: "Autumn" },
        { value: "Winter", label: "Winter" }
    ];
    const filter = (inputValue: any) =>
        options.filter(option =>
            option.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    const LoadOptions = (inputValue: any):any => {
        return new Promise((resolve, reject) => {
            // using setTimeout to emulate a call to server
            setTimeout(() => {
                resolve(filter(inputValue));
            }, 2000);
        });
    };
   
    return (
        <Wrapper>
            <AsyncSelect defaultOptions cacheOptions loadOptions={LoadOptions} placeholder="Select city" />
        </Wrapper>
    )
}

export default Index
