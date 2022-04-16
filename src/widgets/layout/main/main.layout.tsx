import {FC} from 'react'
import {Wrapper, Component} from "./style.layout"
// import {LayoutProps} from "../../custom/interface/main.layout"
interface LayoutProps {
    children: JSX.Element[] | JSX.Element
}
const Layout:FC<LayoutProps> = ({children}) => {
    return (
        <Wrapper>
            <Component>
                {children}
            </Component>
        </Wrapper>
    )
}

export default Layout
