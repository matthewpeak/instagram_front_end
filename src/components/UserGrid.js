import React from 'react'
import '../Grid.css'
import Picture from './Picture'

const UserGrid =(props)=>{
    
    let pictures = props.pictures.map(picture=><Picture key={picture.id} src={picture.address} liked={picture.liked} likecount={picture.likes} commentCount={picture.commentCount} />)
    return(
        <div className='grid-container'>
           {pictures} 
        </div>
    )
}
export default UserGrid