import React from "react"
import ReactDom from "react-router-dom"
import Button from "./"

it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDom.render(<Button></Button>, div)
})

it('reders button correctly',()=>{
    const {getByTestId} = render(<Button lable="click me"></Button>)
    getByTestId('')
})