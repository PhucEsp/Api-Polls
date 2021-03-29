import axios from 'axios'
import React, {useState, useRef} from 'react'
import { Link, Redirect } from 'react-router-dom'
import GetLogin from '../GetData/GetLogin';
const URL_Users = 'http://localhost:8081/users'
function Register() {
    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errName,setErrName] = useState('');
    const [errUsername, setErrUsername] = useState('');
    const [errPass, setErrPass] = useState('');
    const [successful, setSuccessful] = useState('');
    const [errors,setErrors] = useState(false);
    const searchInput = useRef(null)

    //list users
    const {data, messageErr} = GetLogin();
    console.log(data);   
    // console.log(data[0].id);   

    function UserExist() {
        setSuccessful("");
        let isExist = false;
        for(let i=0; i < data.length; i++) {
            if(data[i].username === username){
                return true;
            }
        }
        return isExist;
    }

    function SignUp(e){

        e.preventDefault()
        let IsExist = UserExist();
        if(IsExist === true){
            setSuccessful("Account Already Exist");
        }
        else {
            if(ValidationConfirmPass() === true && ValidationPass() === true && ValidationUsername() === true){
                let user = {username,password}; 
                    axios.post(URL_Users,user)   
                    .then(res => {
                        setSuccessful("Successful !");
                        console.log("this is res data ----",res.data);
                    })
                    .catch(err => {
                        setErrors(true);
                        setSuccessful(err.message);
                    })
            }
            else {
                setSuccessful('');
                setErrPass('');
                // alert(successful);
                searchInput.current.focus();
                // return <Redirect to="/"/>
            }
        }
    }

    function checkRegister(e) {
        setUserName(e.target.value)
        let check = UserExist();
    }

    function ValidationName() {
        // let txt = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        // let text = /[`!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
        // if (name.trim() === '') {
        //     setErrName("this field is required");
        //     // check = false;
        // }
        // else if(name.trim("").length < 6){
        //     setErrName("at least 6 characters");
        //     // check = false
        // }
        // else if (text.test(name)) {
        //     setErrName("Invalid characters");
        //     // check = false;   
        // }
        // else {
        //     setErrName('');
        //     check = true;
        // }
        // console.log(check, '-- name checked');
        // return check;
        // setName(e.target.value);
        // console.log(name)
        // console.log(password)
        // console.log("-------------")
    }

    function ValidationConfirmPass(e) {
        let check = false;
        if(name != password) {
            setErrName("not Matching");
        }
        else {
            setErrName("");
            check = true;
        }
        return check;
    }

    function ValidationUsername(e) {
        let txt = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
        let check = false;
        if (username === '') {
            setErrUsername("this field is required !!!");
            // check = false;
        }
        else if(username.trim("").length < 6){
            setErrUsername("at least 6 characters !!!");
            // check = false;

        }
        else if (txt.test(username)) {
            setErrUsername("Invalid characters !!!");
            // check = false;
        }
        
        else {
            setErrUsername('');
            check = true;
        }
        return check;
    }

    function ValidationPass(e) {
        let check = false;
        let txt = /[ ]/;
        if (password === '') {
            setErrPass("this field is required !!!");
            // check = false;
        }
        else if (txt.test(password)) {
            setErrPass("not include space !!!");
            // check = false;
        }
        else if(password.trim("").length < 6){
            setErrPass("at least 6 characters !!!");
            // check = false;
        }
        else {
            setErrPass('');
            check = true;
        }
        // console.log(password)    
        console.log('password checked ===' , check);
        return check;
    }


    return(
        <div className="container"> 
            <div className="register-page">
            <h2 className="login-title">Create An Account</h2>
            <form className="form" onSubmit={SignUp}>
                <div className="input-username input-wrap" >
                     {/* <label>User Name </label> */}
                     <input type="text" className="inputEmail" placeholder="User Name" name="username" value={username} 
                     onBlur={ValidationUsername} onChange={checkRegister} ref={searchInput}></input>
                     <span>{errUsername} </span>
                </div>
                <div className="input-password input-wrap" >
                    {/* <label>PassWord </label> */}
                    <input type="password" className="inputEmail" placeholder="Password" name="password" value={password} 
                    onBlur={ValidationPass} onChange={(e) => setPassword(e.target.value) }  ></input>
                    <span>{errPass}</span>
                </div>
                <div className="input-name input-wrap" >
                     {/* <label>Name </label> */}
                     <input type="password" className="inputEmail" placeholder="Confirm Password" name="name" 
                     onBlur={ValidationConfirmPass} value={name} onChange={(e) => {setName(e.target.value)}}  ></input>
                     <span>{errName}   </span>
                </div>
                {/* <div  onClick={SignUp} >Click</div> */}
                <button type="submit">Register </button>
                <p className="isSucces">{successful}</p>
            </form>

            <div className="link-Create" > <Link to="/">Go to Login</Link></div>  
            </div>
        </div>
    )    
    
}

export default Register;