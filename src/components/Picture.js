import React from 'react' 

const Picture = (props)=>{
  
    return(
    <div className='image-container'>
     <img src={props.src}/>
     <span>{props.caption}</span>
     <span> 'heart'</span>
     <span>{props.likecount}</span>
    </div>
    );
};

export default Picture