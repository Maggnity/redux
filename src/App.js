import './App.css';
import Login from './Components/Login';
import User from './Components/User';
import Logout from './Components/Logout';

function App() {
  return (
    <div className="App">
        <Login />
          <br />
        <User  />
          <br />
        <Logout />
    </div>
  );
}

export default App;
