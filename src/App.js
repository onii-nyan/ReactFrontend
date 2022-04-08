import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import {BrowerRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          hello
        </header>
        <div className='container'>
          <Switch>
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
