import React from 'react'
import '../Grid.css'
import Picture from './Picture'

const UserGrid =(props)=>{
   
    let pictures = props.pictures.map(picture=><Picture key={picture.id} src={props.src} caption={props.caption} likecount={props.likecount} />)
    
    return(
        <div className='grid-container'>
           {pictures} 
        </div>
    )
}
export default UserGrid