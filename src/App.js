import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


      <button onClick={() => {

        async function getUserInfo() {
          const response = await fetch('/.auth/me');
          const payload = await response.json();
          const { clientPrincipal } = payload;
          return clientPrincipal;
        }

        console.log(getUserInfo());
      }}>获取用户信息</button>
    </div>
  );
}

export default App;
