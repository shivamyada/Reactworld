import React from "react"

import {Link} from  "react-router-dom"

const Header=()=>{
    return (
        <div className="header">
            <div className="headerleft">
              <Link style={{height:"100px",width:"100px"}} to ="/" > <img className="header_icon"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IM"/></Link>
              <Link to="/movies/popular"  style={{textDecoration:"none"}}><span>popular</span></Link>
              <Link to="/movies/top_rated" style={{textDecoration:"none"}}><span>Top rated</span></Link>
              <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span>upcoming</span></Link>
            </div>
           
            
             </div>

    )
}

export default Header;