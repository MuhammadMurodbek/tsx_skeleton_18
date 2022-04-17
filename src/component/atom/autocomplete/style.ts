import styled from 'styled-components'
export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    img{
        width: 25px;
        height: 25px;
    }
`
export const MenuListComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:5px;
    .main{
        min-width: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .country,.name{
        margin-left: 4px;
    }
    .flag{
        position: relative;
        top:-1px;
    }
    .coordinate{
        width: 100px;
        text-align: right;
    }
`