import React from 'react' 
import '../Grid.css'

const Picture = (props)=>{
  
    return(
    <div className='image-container'>
     <img className='image' src={props.src}/>
     <span>{props.caption}</span>
     <span> 'heart'</span>
     <span>{props.likecount}</span>
    </div>
    );
};

export default Picture