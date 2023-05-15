import React from "react";
import './Navbar.css';

function Navbar() {

    return(

        <div className="header">

            <div className="left">

                <img className="logo" src='/assets/LOGO.png'/>

                <a>Courses <img src="/assets/down_arrow.png"/></a>

                <a>Programs <img src="/assets/down_arrow.png"/></a>

            </div>

            <div className="right">

                <img src="/assets/search.png"/>

                <p>Log in</p>

                <button>JOIN NOW</button>
                
            </div>

        </div>

    )

}

export default Navbar ;