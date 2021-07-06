import React from 'react' 
import '../Grid.css'

const Picture = (props)=>{
    
    return(
    <div className='image-container'>
     <img className='image' src={props.src}/>
     <div className='image-stats'>
     {props.liked =='yes'? <span> 'heart'</span> : <span> 'no heart'</span>}
     <span>{props.likecount}</span>
     </div>
    </div>
    );
};

export default Picture