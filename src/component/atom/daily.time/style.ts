import styled from "styled-components"
interface dataProps{
    term:string | undefined
}
export const Container = styled.div<dataProps>`
    width: 100%;
    .temp_number{
        display: flex;
        align-items: center;
        flex-direction:column;
        background: ${state=>state.term === 'Morning' ? '#39bfc3':state.term ==='Day' ? '#fbca01': state.term ==='Evening' ? '#fa5982':'#803e99'};
        border-radius: 5px;
        color: #fff;
        padding:5px 3px;
        box-shadow: 0 0 8px -2px ${state=>state.term === 'Morning' ? '#39bfc3':state.term ==='Day' ? '#fbca01': state.term ==='Evening' ? '#fa5982':'#803e99'};
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