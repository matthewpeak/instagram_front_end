import React,{useState,useMemo} from 'react'
import Comment from './Comment'

const CommentsDisplay=(props)=>{
    
    let comments = comments.sort((a,b)=>{return b.likes-a.likes})
    comments = comments.map(comment=><Comment user_name={comment.user_name} likes={comments.like} liked={comment.liked} comment={comment.comment}/>)

    return(
        <div className='comments-display'>
            {comments}
        </div>
    )


}

export default CommentsDisplay