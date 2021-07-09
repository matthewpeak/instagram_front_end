import {useState} from 'react'
import'../Form.css'

const SignUpForm = () =>{
  const[values,setValues] = useState({
    username:'',
    email:'',
    password:''
    });
    
    const handleChange = e =>{
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        });
    };
    const handleSubmit = e =>{
      e.preventDefault()

      fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
              'content-type':'application/json',
              Accept:'application/json'
            },
            body: JSON.stringify({
              username: values.username,
              password:values.password,
              email: values.email
            }),
          })
            .then((res) => res.json())
            .then((result) => console.log(result))
            .catch((err) => console.log('error'))
        }

    return(
    <div className='form-content'>
        <form className='form' onSubmit={handleSubmit}>
            <div className='form-input'>
                <label htmlFor='username' className='form-label'>
                    Username
                </label>
                <input className='form-input' type='text' name='username' id='username' placeholder='enter your username' value={values.username} onChange={handleChange}>
                </input>
            </div>
            <div className='form-input'>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
                <input className='form-input' type='email' name='email' id='email' placeholder='enter your email' value={values.email} onChange={handleChange} >
                </input>
            </div>
            <div className='form-input'>
              <label htmlFor='password' className='form-label'>
                Password
              </label>
                <input className='form-input' type='password' name='password' id='password' placeholder='enter your passwrod' value={values.password} onChange={handleChange} >
                </input>
            </div>
            <button className='form-btn' type='submit'> 
              sign up 
            </button>
        </form>
    </div>
    )
}

export default SignUpForm 