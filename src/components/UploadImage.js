import React ,{useState} from 'react'


const UploadImage=(props)=>{

    const[values,setValues] = useState({
        title:'',
        user:props.username
    });
    
    const [selectedFiles, setSelectedFiles] = useState(undefined);


    const handleChange = e =>{
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        });
    }

    const fileSelectedHandler = event =>{
         setSelectedFiles(event.target.files[0])
    }

    const fileUploadHandler = event =>{
       console.log(values.title , selectedFiles)
    }

    return(
        <div className='upload'>

        <input type='file' onChange={fileSelectedHandler}/>
        <input type='text' placeholder='enter title' name= 'title' onChange={handleChange} value={values.title}></input>
        <button onClick= {fileUploadHandler}>upload</button>
        </div>
    )

}


export default UploadImage