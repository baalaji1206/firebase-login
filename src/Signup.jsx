import React, { useState } from 'react'
import './Signupst.css'
import { Link } from 'react-router-dom'
import {auth} from './firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'

const Signup = () => {
    const [name,setname]= useState('')
    const [email,setemail]= useState('')
    const [password,setpassword]= useState('')

    const handlesubmit = async(e) =>{
        e.preventDefault()
        try{
            await createUserWithEmailAndPassword(auth,email,password)
            console.log("acc created")
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <div className='full'>
        
        <div className='card'>
            <form className='signup-form' onSubmit={handlesubmit}>
            <h1>Signup</h1>
                <label htmlFor='name'>
                    Name:
                    <input type='text' name='name' placeholder='Full Name' onChange={(e)=> setname(e.target.value)} />
                </label><br></br>
                <label htmlFor='email'>
                    Email:
                    <input type='email' name='email' placeholder='EmailID' onChange={(e)=> setemail(e.target.value)}/>
                </label><br></br>
                <label htmlFor='password'>
                    Password:
                    <input type='password' name='password' placeholder='Password' onChange={(e)=> setpassword(e.target.value)}/>
                </label><br></br>
                <button type='submit' className='button'>Signup</button>
                <p>Already registered<Link to='/'>Login</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Signup