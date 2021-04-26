import React from 'react'
import Logo from '../icons/logo.svg'

const NavBar= (props)=>{
    return(
        <div className="d-flex justify-content-between p-2">

            <div className="">
                <img src={Logo} className="logo" alt="" srcset=""/>
                <span className="h1  f-1 headAnim">{props.head}</span>
            </div>

            <div class="mt-2">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.modeFn}/>
                            <label class="form-check-label" for="flexSwitchCheckDefault">
                                <i class="bi bi-sun-fill dclr-2"></i>
                                <i class="bi bi-moon dclr-2"></i>
                            </label>
                        </div>
                    </div>
        </div>
    )
}

export default NavBar;