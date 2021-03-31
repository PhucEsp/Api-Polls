import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'

const URL_Users = 'http://localhost:8081/users'
const URL_Login = 'http://localhost:8081/login'

class LoginPage extends Component {
    constructor(props){
        super(props);

        let loggedIn = false;
        this.state = {
            username: '',
            password: '',
            errUsername: '',
            errPass: '',
            errMessage: '',
            checkLogin: '',
            loggedIn
        }
    }

    ValidationUsername = (e) => {
        e.preventDefault();
        let txt = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
        let check = false;
        if (this.state.username.trim() === '') {
            this.setState({
                errUsername: "this field is required !!!"
            });

        }
        else if(this.state.username.trim("").length < 6){
            this.setState({
                errUsername: "at least 6 characters !!!"
            });
        }
        else if (txt.test(this.state.username)) {
            this.setState({
                errUsername: "Invalid characters !!!"
            });

        }
        
        else {
            this.setState({
                errUsername: ""
            });
            check = true;
        }
        return check;
    }

    ValidationPass = (e) =>{
        e.preventDefault();
        let check = false;
        let txt = /[ ]/;
        if (this.state.password.trim() === '') {
            this.setState({
                errPass: "this field is required !!!"
            });
            // check = false;
        }
        else if (txt.test(this.state.password)) {
            this.setState({
                errPass: "not include space !!!"
            });
            // check = false;
        }
        else if(this.state.password.trim("").length < 6){
            this.setState({
                errPass: "at least 6 characters !!!"
            });
            // check = false;
        }
        else {
            this.setState({
                errPass: ""
            });
            check = true;
        }
        return check;
    }

    componentDidUpdate(prevProps, prevState){
        // // console.log(prevState.loggedIn, ' --- prevState')
        // // console.log(this.state.loggedIn, ' --- this state')
        console.log('---prevState checklogin : ' ,prevState.checkLogin);
        console.log('---prevState loggedin : ' ,prevState.loggedIn );
    }

     componentWillUpdate(nextProps, nextState) {
        let user = {
            username: this.state.username,
            password: this.state.password,
        }
        try {
            axios.post(URL_Login,user)   
            .then(res => {
                this.setState({
                    checkLogin: res.data,
                })
            })
            .catch(err => {
                this.setState( {
                    checkLogin: err.message,
                })
            })
        } catch (error) {
            this.setState({
                checkLogin: error.message,
            })
        }
   }
    onChange =  (e) =>  {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    submitForm =  (e) =>  {
        e.preventDefault();
        // dang nhap thanh cong
        if(this.state.checkLogin === 'Valid')
        {
            this.setState(prevState => ({
                loggedIn: true,
            }))
            localStorage.setItem('token','token item');
        }
        // User not found
        if(this.state.checkLogin === 'User not found'){
            this.setState(prevState => ({
                loggedIn: false,
                errMessage: "User not found",
            }))
        }   
        // Wrong Password
        if(this.state.checkLogin === 'Wrong Password') {
            this.setState(prevState => (
                {
                    loggedIn: false,
                    errMessage: "Wrong Password",
                }
            ))
        } 

        // console.log(this.state.loggedIn , '-----')
        // console.log(this.state.checkLogin , '-----')

    }   

    render() {
        if(this.state.loggedIn){
            return <Redirect to="/mainpage"/>
        }
        return (
            <div className="container">
                <div>
                <h2 className="login-title">Login Page</h2>
                <form className="form" onSubmit={this.submitForm}>
                    <div className="input-username wrap-input" >
                        {/* <label>Email </label> */}
                        <input type="text" className="inputEmail" placeholder="User Name" name="username" value={this.state.username} onBlur={this.ValidationUsername} onChange={this.onChange}></input>
                        <span className="error" >{this.state.errUsername}</span>
                    </div>
                    <div className="input-pass wrap-input" >
                        {/* <label>Password</label> */}
                        <input type="password" className="inputEmail" placeholder="Password" name="password" value={this.state.password} onBlur={this.ValidationPass} onChange={this.onChange}></input>
                        <span className="error" >{this.state.errPass}</span>
                    </div>
                    <button type="submit">Login </button>
                    <h2>{this.state.errMessage}</h2>
                </form>

                <div className="link-Register">
                    <Link  to="/register"><span>Create an Account</span> </Link>
                </div>   
                </div>
            </div>
        )
    }
}

export default LoginPage;