import {useState} from 'react'

const CommentInput =(props)=>{
    
    const [commentText,setCommentText] = useState('')

    const handleChange = (e) =>{
        const{value} = e.target
        setCommentText(value) 
    }

    const handleSubmit=(e)=>{
        e.preventdefault()
        console.log(value)
    }

    return(
    <div className='comment-input-holder'>
        <input type='text' className='comment-text-box' value={commentText} onChange={handleChange}></input>
        <button className='comment-submit'></button>
    </div>
    )
}
export default CommentInput