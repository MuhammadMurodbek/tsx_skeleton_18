import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    .temp_number{
        display: flex;
        align-items: center;
        font-size:1.3rem;
    }
    img{
        width: 14px;
        height: 16px;
        margin-right: 4px;
        filter: invert(100%);
    }
    img.rotate{
        transform: rotate(180deg);
        filter: contrast(100%);
    }
`