import React from 'react'
import '../NavBar.css'

const NavBar =(props)=>{
    console.log(props.user)
    return(
    <div>
     <button>messages</button>
     <button>settings</button>
     <span>{props.user}</span>
    </div>
    )
}

export default NavBar