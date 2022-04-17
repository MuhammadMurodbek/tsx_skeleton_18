import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    .temp_number{
        display: flex;
        align-items: center;
        flex-direction:column;
        /* border:1px solid green; */
        background: #39bfc3;
        border-radius: 5px;
        color: #fff;
        padding:5px 3px;
        /* font-size:1.3rem; */
    }
    .temp{
        font-size: 1.1rem;
        /* font-weight: bold; */
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