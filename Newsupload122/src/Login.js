import React from 'react'
import axios from "axios"
import { useContext } from 'react'
import Mycontext from './Mycontext'
import "./Login.css"
const Login = () => {
    const { Email, Password, Check1, SetEmail, SetPassword, SetCheck1} = useContext(Mycontext);
    async function HandleSubmit(e) {
        e.preventDefault();
        const response = await axios.post("http://localhost:6892/api/auth/login"
            ,
            {
                Email,
                Password,

            }
        )
        if(response)
        {
            console.log(response.data.find)
            SetCheck1(!Check1)
        }


    }
    return (
        <div className='login_page'>
            <h2 className='h2Login'>Login</h2>
            <div className='form_login'>
            <form onSubmit={HandleSubmit}>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" onChange={(e) => SetEmail(e.target.value)} required />

                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" onChange={(e) => SetPassword(e.target.value)} required />

                <div id="errorMessage" class="error"></div>

                <button type="submit">Login</button>
            </form>
            </div>
            {Check1&&
            <div className='data_login'>
          <h1> Your email is {Email} </h1> 
            </div>}
        </div>
    )
}

export default Login
