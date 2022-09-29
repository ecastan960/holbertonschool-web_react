import './App.css';
import logo from './holberton_logo.jpg';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className='App'>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <div>
          <p>Login to access the full dashboard</p>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email"></input>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password"></input>
          <button>OK</button>
        </div>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
