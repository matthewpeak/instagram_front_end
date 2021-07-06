import React from 'react'
import '../Grid.css'
import Picture from './Picture'

const UserGrid =(props)=>{
   console.log(props.pictures)
    let pictures = props.pictures.map(picture=><Picture key={picture.id} src={picture.picture} liked={picture.liked} likecount={picture.likes} />)
    
    return(
        <div className='grid-container'>
           {pictures} 
        </div>
    )
}
export default UserGrid