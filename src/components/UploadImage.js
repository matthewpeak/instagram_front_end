import React ,{useState} from 'react'
import '../Upload.css'

const UploadImage=(props)=>{

    const[values,setValues] = useState({
        title:'',
        address:'',
        user:props.user
    });
    
    


    const handleChange = e =>{
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        });
    }

    

    const fileUploadHandler = e =>{
       e.preventDefault()
       fetch('http://localhost:3000/pictures', {
          method: 'POST',
          headers: {
            'content-type':'application/json',
            Accept:'application/json'
          },
          body: JSON.stringify({
            title : values.title,
            user_id:values.user,
            liked:'no',
            commentCount:0,
            address:values.address,
            likes:0
          }),
        })
          .then((res) => res.json())
          .then((result) => console.log(result))
          .catch((err) => console.log('error'))

    }
     console.log("fwefwef")
    return(
        <div className='upload'>
        <input type='text' placeholder='enter picture address' name='address' onChange={handleChange} value={values.address} />
        <input type='text' placeholder='enter title' name= 'title' onChange={handleChange} value={values.title}></input>
        <button onClick= {fileUploadHandler}>upload</button>
        </div>
    )

}


export default UploadImage