import { FC } from 'react'
import { Wrapper, Component } from "./style.layout"
import Navbar from "../../../component/molecules/navbar.component"
import { useQueryWeather } from "../../../queries/query.weather"
import { useSearchStore } from "../../../service/search"
import { LayoutProps } from "../../../entities/interfaces/layout"

const Layout: FC<LayoutProps> = ({ children }) => {

    const searchState = useSearchStore(state => state.searchGlobal)
    const { status } = useQueryWeather(searchState)

    return (
        <Wrapper>
            {status === 'success' && <Navbar />}
            <Component>{children}</Component>
        </Wrapper>
    )
}

export default Layout
