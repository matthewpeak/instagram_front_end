import React from 'react'

const comment=(props)=>{
    const {user_name,comment,likes,liked} = props
    
    return(
        <div className='comment-div'>
            <span>{user_name}</span>
            <text>{comment}</text>
            <div className='comment-likes'>
                <span>{liked}</span>
                <span>{likes}</span>
            </div>
        </div>
    )
}