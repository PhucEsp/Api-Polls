import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './index.scss'
import { Component } from 'react';
import Register from './components/RegisterPage';
import Login from './components/Login'; 
import MainPage from './components/MainPage';
import NotFound from './components/NotFound';
import Polls from './components/Polls';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/register">
             <Register></Register>
           </Route>
          <Route exact path="/mainpage">
              <MainPage ></MainPage>
          </Route>
          {/* <Route exact path="/polls" component={Polls}></Route>
          <Route  exact path="/createPoll" component={CreatePoll}></Route> */}
          <Route exact path="/login" >
            <Login></Login>
          </Route>
          <Route exact path="/" component={Login} > 
            <Redirect to='/login'/>
          </Route>
          <Route exact path="/mainpage/polls">
              <MainPage>
                <Redirect to="/mainpage/polls" ></Redirect>
              </MainPage>
          </Route>

          <Route exact path="/mainpage/createPoll">
              <MainPage>
                <Redirect to="/mainpage/createPoll" ></Redirect>
              </MainPage>
          </Route>

          <Route exact path="*" component={NotFound} > 
          </Route>
        </Switch>
      </BrowserRouter>
    //  <MyComponent></MyComponent>
      );
  }
}

export default App;
