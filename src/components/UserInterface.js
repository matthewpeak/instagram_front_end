import React,{useState,useEffect} from 'react'
import UserGrid from './UserGrid'
import NavBar from './NavBar'
import UploadImage from './UploadImage'
const UserInterface =()=>{

        const [user,setUser] = useState(1)
        const [pictures,setPictures] = useState([])
        
        useEffect( () =>{
          fetch("http://localhost:3000/pictures", {
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
          
              })
           .then(res=>res.json())
           .then(data => setPictures([...data]))
        },[])
        
        
       return( 
               
        <div>
       <NavBar user={user}/>
       {/* <UploadImage user={user}/> */}
       <UserGrid pictures={pictures}/>
       </div>
       )
}

export default UserInterface




