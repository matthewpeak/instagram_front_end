import React from 'react'
import '../NavBar.css'

const NavBar =(props)=>{
    
    return(
    <div>
     <button>messages</button>
     <button>settings</button>
     <span>{props.user}</span>
    </div>
    )
}

export default NavBar