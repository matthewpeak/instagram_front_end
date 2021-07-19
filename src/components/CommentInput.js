import {useState} from 'react'
import '../CommentInput.css'
const CommentInput =(props)=>{
    
    const [commentText,setCommentText] = useState('')

    const handleChange = (e) =>{
        const{value} = e.target
        setCommentText(value) 
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(commentText)
    }

    return(
    <div className='comment-input-holder'>
        <textarea type='text' className='comment-text-box' value={commentText} onChange={handleChange}></textarea>
        <button className='comment-submit' onClick={handleSubmit}>submit</button>
    </div>
    )
}
export default CommentInput