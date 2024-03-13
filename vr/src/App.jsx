
import { useState } from 'react';
import './App.css'

function App() {

  let token = localStorage.getItem('token');
  let userName = localStorage.getItem('username');

  const [getToken, setToken] = useState(token);
  const [getUserName, setUserName] = useState(userName);

  const handleClick = () => {
    localStorage.clear();
    setToken("");
    window.location.href = 'http://localhost:5173/'
  }

  const goback = () => {
    window.location.href = 'http://localhost:5173/'
  }
    return (
      <div>
        {getToken && getUserName ? <div>
          <h1>Hello {getUserName}</h1>
          <button onClick={handleClick}>Logout</button>
        </div> : <button onClick={goback}>Error You need to login first</button>}

      </div>
    )

}

export default App
