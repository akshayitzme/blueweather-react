import React from 'react'

const Footer= ()=>{
    return(
        <footer className="footer d-flex justify-content-between align-items-center px-2">
    <span className="clr-4 f-5 fw-bold fs-7">coded with ❤️ in react.js </span>
    <div className="">
        <a className="text-decoration-none" href="https://github.com/akshayitzme/blueweather-v3">
            <i className="bi fs-3 bi-github clr-4"></i>
        </a>
        {/* <a className="text-decoration-none" href="https://github.com/akshayitzme/blueweather-v3">
            <i className="clr-4 fs-3 bi bi-instagram"></i> 
        </a> */}
        <a className="text-decoration-none" href="https://t.me/coderitzme">
            <i className="bi bi-telegram fs-3 clr-4"></i>
        </a>
    </div>
</footer>
    )
}

export default Footer
