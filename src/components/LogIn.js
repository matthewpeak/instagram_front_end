import {useState} from 'react'

const Login =()=>{

    const [values,setValues] =  useState({
        username:'',
        password:''
    });

    const handleChange =(e)=>{
        const {name,value} = e.target

        setValues({
            ...values,
            [name]:value
        });
    };

    return(
        <div className='form-content'>
            <form className='form'>
                <div className='form-input'>
                    <label htmlFor='username' className='form-label'>
                        Username
                    </label>
                    <input className='form-input' type='text' name='username' id='username' placeholder='enter your username' value={values.username} onChange={handleChange}>
                    </input>
                </div>
                <div className='form-input'>
              <label htmlFor='password' className='form-label'>
                password
              </label>
                <input className='form-input' type='password' name='password' id='password' placeholder='enter your passwrod' value={values.password} onChange={handleChange} >
                </input>
             </div>
             <button className='form-btn' type='submit'> 
               Login
             </button>
            </form>
        </div>
    );

};

export default Login