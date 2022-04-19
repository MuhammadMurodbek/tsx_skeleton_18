import styled from "styled-components"
export const Container = styled.div`
    width:100%;
    height: 100%;
    margin-top: 50px;
    /* text-align: center; */
    img{
        position: relative;
        right:15px;
    }
    .title,.text{
        color:orangered;
        font-size: 1.2rem;
        margin-bottom: 4px;
    }
    .select{
        width: 400px;
        margin:0 auto;
        position: relative;
        left:10px; top:-20px;
    }
    .wrapper{
        text-align: center;
        /* background: red; */
    }
`
export const ButtonRefresh = styled.button`
        margin-top: 10px;
        padding:10px 12px;
        border:none;
        outline: none;
        border-radius: 4px;
        background:  #39bfc3;
        color: #fff;
        font-family: 'Poppins';
        cursor: pointer;
        text-decoration: none;
`
