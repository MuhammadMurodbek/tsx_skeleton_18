import {FC} from 'react'
import {Wrapper, Component} from "./style.layout"
import Navbar from "../../../component/molecules/navbar.component"
interface LayoutProps {
    children: JSX.Element[] | JSX.Element
}
const Layout:FC<LayoutProps> = ({children}) => {
    return (
        <Wrapper>
            <Navbar/>
            <Component>
                {children}
            </Component>
        </Wrapper>
    )
}

export default Layout
