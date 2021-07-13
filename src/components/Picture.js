import React,{useState} from 'react' 
import '../Grid.css'

const Picture = (props)=>{
    
    const [inHover, setHover] = useState(false);

   
    return(
    <div className='image-container' onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}>
     <img className='image' src={props.src}/>
     {inHover &&
     <div className='image-stats'>
         <div className='likes-container'>
             {props.liked =='yes'? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                </svg>: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>}
             <span>{props.likecount}</span>
         </div>
         <div className='comments-info'>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
             <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
             </svg>
             <span>{props.commentCount}</span>
         </div>
     </div>
    }
    </div>
    );
};

export default Picture