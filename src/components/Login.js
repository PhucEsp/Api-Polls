import React, { useState, useEffect } from 'react'
import {Redirect, Link, useHistory} from 'react-router-dom'
import axios from 'axios'
function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [errUsername,setErrUsername] = useState('');
    const [errPass,setErrPass] = useState('');
    const [checkLogin,setCheckLogin] = useState('');
    const [errMessage,setErrMessage] = useState('');
    const [isLogin,setIsLogin] = useState(false);
    const [checkSubmit, setCheckSubmit] = useState(false);
    const URL_Login = 'http://localhost:8081/login'
    const history = useHistory();

    useEffect(()=> {
        let user = {
            username: username,
            password: password,
        }
        try {
            axios.post(URL_Login,user)   
            .then(res => {
                setCheckLogin(res.data)
            })
            .catch(err => {
            setCheckLogin(err.message)
            })
        } catch (error) {
            setCheckLogin(error.message)
        }
    },);

    function ValidationUsername(e) {
        e.preventDefault();
        let txt = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
        let check = false;
        if (username.trim() === '') {
            setErrUsername('this field is required !')
        }
        else if(username.trim("").length < 6){
            setErrUsername('at least 6 characters !')
        }
        else if (txt.test(username)) {
            setErrUsername('Invalid characters !')
        }
        
        else {
            setErrUsername('')
            check = true;
        }
        return check;
    }
    function ValidationPass(e){
        e.preventDefault();
        let check = false;
        let txt = /[ ]/;
        if (password.trim() === '') {
            setErrPass('this field is required !');
            // check = false;
        }
        else if (txt.test(password)) {
            setErrPass('not include space !');
            // check = false;
        }
        else if(password.trim("").length < 6){
            setErrPass('at least 6 characters !');
            // check = false;
        }
        else {
            setErrPass('');
            check = true;
        }
        return check;
    }
    function submitForm (e) {
        e.preventDefault();
        setCheckSubmit(!checkSubmit);
        if(checkLogin === 'Valid'){
            localStorage.setItem('token','token item');
            history.push("/mainpage/polls")
        }
         if(checkLogin === 'User not found') {
            setErrMessage(checkLogin);
            setIsLogin(false);
        }
        else if (checkLogin === 'Wrong Password') {
            setErrMessage(checkLogin);
            setIsLogin(false);
        }
    }

    const token = localStorage.getItem("token");
    if(token != null){
        return <Redirect to="/mainpage/polls"/>
    }

    return (
        <div className="container">
        <div>
        <h2 className="login-title">Login Page</h2>
        <form className="form" onSubmit={submitForm}>
            <div className="input-username wrap-input" >
                {/* <label>Email </label> */}
                <input type="text" className="inputEmail" placeholder="User Name" 
                name="username" value={username} 
                onBlur={ValidationUsername} onChange={(e) => setUsername(e.target.value)}></input>
                <span className="error" >{errUsername}</span>
            </div>
            <div className="input-pass wrap-input" >
                {/* <label>Password</label> */}
                <input type="password" className="inputEmail" placeholder="Password" 
                name="password" value={password} 
                onBlur={ValidationPass} onChange={(e) => setPassword(e.target.value)}></input>
                <span className="error" >{errPass}</span>
            </div>
            <button type="submit">Login </button>
            <h2 className="login-error">{errMessage}</h2>
        </form>

        <div className="link-Register">
            <Link  to="/register"><span>Create an Account</span> </Link>
        </div>   
        </div>
    </div>
    )
}

export default Login
