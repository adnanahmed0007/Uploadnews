import React from 'react'
import { useContext } from 'react'
import Mycontext from './Mycontext'
import axios from "axios"
 import "./Register.css"
const Register = () => {
    const { Name, Email, PhoneNumber, Password,Check, SetEmail, SetName, SetPassword,SetCheck, SetPhoneNumber } = useContext(Mycontext);
    async function HandleSubmit(e) {
        e.preventDefault();
        if(Name&&Password&&PhoneNumber&&Email)
        {
            const response=await axios.post("http://localhost:6892/api/auth/register",{
                    Name,
                    PhoneNumber,
                    Password,
                    Email,
                

            })
            if(response)
            {
                console.log(response.data)
                console.log(response.data.newUser1)
                SetCheck(!Check);
            }
        }
        
    }
    return (
        <div className='container'>
        <h1 className='registerh1'>Register page </h1>
            <form onSubmit={HandleSubmit}>
                <label for="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    onChange={(e) => SetName(e.target.value)}
                    required />

                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" onChange={(e) => SetEmail(e.target.value)} required />

                <label for="phone">Phone Number</label>
                <input type="text" id="phone" name="phone" placeholder="Enter your phone number" 
                    onChange={(e) => SetPhoneNumber(e.target.value)}
                    required />

                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" 
                onChange={(e)=>SetPassword(e.target.value)}
                required />

                <button className='button_register' type="submit">Submit</button>
            </form>
            <div className='data_register'>
            {Check&&<div className='data_field'>
             <p> Your name is  {Name}</p> 
             <p> Your name is  {Password}</p> 
             <p> Your name is  {Email}</p> 
                <p> Your Phone-Number is {PhoneNumber} </p>  
            </div>}
                 
            </div>



        </div>
    )
}

export default Register
