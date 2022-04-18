import styled from "styled-components"

export const Container = styled.div`
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:0 auto;
    gap:30px;
    padding:10px;

    .back_link{
        position: absolute;
        left: 0;
        width: 100px;
        display: inline-block;
        text-decoration: none;
        img{
            position: relative;
            top:3px;
            width: 25px;
            height: 25px;
        }
    }

`
export const Wrapper = styled.div`
    position: relative;

    width: 90%;
    display: block;
    margin-top:15px;
    padding: 15px 10px;
    text-align: center;
    box-shadow: 0 0 12px -2px #ccc;
    border-radius: 5px;
    /* box-sizing: border-box; */
    /* background: red; */
`