import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Link, Switch, Route } from 'react-router-dom';
import './index.scss'
import Login from './components/LoginPage';
import Register from './components/RegisterPage';
import MainPage from './components/MainPage';
import { Component } from 'react';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/mainpage" component={MainPage} />
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    //  <MyComponent></MyComponent>
    
      );
  }
}

const A = () => {
  return(
    <div>
      <h1>This is main page</h1>
    </div>
  )
}

export default App;
