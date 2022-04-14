import React,{FC} from 'react'
import {Link} from "react-router-dom"

const Navbar:FC = () => {
    return (
        <div>
            <Link to="/page1"/>
            <Link to="/page2"/>
            <Link to="/page3"/>
        </div>
    )
}

export default Navbar
