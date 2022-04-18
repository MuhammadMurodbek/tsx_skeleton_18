import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    .temp_number{
        font-size: 2.5rem;
    }
    .button{
        padding:10px 12px;
        border:none;
        outline: none;
        border-radius: 4px;
        background:  #39bfc3;
        color: #fff;
        font-family: 'Poppins';
        cursor: pointer;
        text-decoration: none;
    }
    .button.active{
        background:  #386f70;
    }
`