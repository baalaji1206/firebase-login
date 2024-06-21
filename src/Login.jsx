import React ,{useState}from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import {auth} from './firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'

const Login = () => {
    const [name,setname]= useState('')
    const [email,setemail]= useState('')
    const [password,setpassword]= useState('')
    const [error, setError] = useState('');

    const handlesubmit = async(e) =>{
        e.preventDefault()
        setError('');
        try{
            await signInWithEmailAndPassword(auth,email,password);
            console.log("login sucess")
        }
        catch(err){
            console.log(err);
            setError(err.message);
        }
    }
  return (
    <div className='full'>
        
        <div className='card'>
            <form className='signup-form' onSubmit={handlesubmit}>
            <h1>Login</h1>
                <label htmlFor='email'>
                    Email:
                    <input type='email' name='email' placeholder='EmailID' />
                </label><br></br>
                <label htmlFor='password'>
                    Password:
                    <input type='password' name='password' placeholder='Password' />
                </label><br></br>
                <button type='submit' className='button'>Login</button>
                <p>Dosn't have an Account<Link to='/signup'>Signup</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login