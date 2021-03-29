import React, {useState, useEffect} from 'react'
import {Link, Redirect, BrowserRouter, Switch, Route} from 'react-router-dom'
import CreatePoll from './CreatePoll';
import Login from './LoginPage';
import Polls from './Polls';

function MainPage() {
    const [loggedIn, setLoggedIn] = useState(true);
    console.log(loggedIn);
    const token = localStorage.getItem("token");
    if(token === null)
    {
        setLoggedIn(false);
    }

    const nothing = () => {

    }


    if(!loggedIn){
        return <Redirect to="/"/>
    }
    return (
        <BrowserRouter>
            <div className="mainpage">
                <div className="header">
                    <div className="container-mainpage navbar">
                        <h3 className="navbar-title">Captain</h3>
                        <div className="navbar-end">
                            <div className="polls">
                                <Link to="polls">Polls</Link>
                            </div>
                            <div className="create-poll" onClick={nothing}>
                                <Link to="createPoll">Create a Poll</Link>
                            </div>
                            <div onClick={ () => {localStorage.removeItem("token")}}>
                                {/* <Link to="/" > Logout </Link>  */}
                                <a href="/" >Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/polls" component={Polls}></Route>
                    <Route  exact path="/createPoll" component={CreatePoll}></Route>
                </Switch>
                
            </div>
        </BrowserRouter>
        
    )           
}

export default MainPage;