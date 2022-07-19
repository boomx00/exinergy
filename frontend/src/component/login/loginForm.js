import {useState,useEffect } from 'react'
import { useDispatch,connect } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/slices/authSlices';
import './login.css';
function LoginForm(){
    const dispatch = new useDispatch()
    let navigate = useNavigate();
    const [email,setEmail] = useState()
    const [password, setPassword] = useState()

    const login =async ()=>{
        const data = {
            email: email,
            password: password
        }
        const userLogin = await dispatch(loginUser(data))
        if(userLogin == "LOGIN_SUCCESS"){
            navigate("/dashboard");
        }
    }
    return(
        <div class="login-wrapper">
        <div class="login-header">
        <h1>Sign In Now</h1>
        </div>
        <div class="login-content">
            <p>Login with Email</p>
            <input type="text"
            value={email??""}
            onChange={(text)=>setEmail(text.target.value)}
            ></input>
            <p>Password</p>
            <input type="password"
            value={password??""}
            onChange={(text)=>setPassword(text.target.value)}
            ></input>
           
            <div class="login-btn">
                <input type="submit" value="Login" onClick={login} ></input>
            </div>
           
        </div>
    </div>
    )
}
export default LoginForm;