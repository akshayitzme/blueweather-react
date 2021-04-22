import React from 'react'
import Logo from '../icons/logo.svg'

const NavBar= (props)=>{
    return(
        <div className="d-flex justify-content-between p-2">

            <div className="">
                <img src={Logo} className="logo" alt="" srcset=""/>
                <span className="h1  f-1 headAnim">{props.head}</span>
            </div>
        </div>
    )
}

export default NavBar;