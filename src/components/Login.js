import React, {Component} from 'react'

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: 'Phuc Nim',
        }
    }
    render() {
        return (
            <div className="container">
            <form className="form-login">
                <div className="input-Eemail" >
                     <label>Email </label>
                     <input type="email" className="inputEmail" ></input>
                     <span className="error-email" >err email</span>
                </div>
                <div className="input-pass" >
                    <label>PassWord</label>
                    <input type="password" className="password"></input>
                    <span className="error-pass" >err pass</span>
                </div>
                <button>Login </button>
            </form>
        </div>
        )
    }
}

export default Login;