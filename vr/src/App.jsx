import { useState } from 'react';
import './App.css'
import Loginaccess from './components/Loginaccess';

function App() {

  let token = localStorage.getItem('token');
  let userName = localStorage.getItem('username');

  const [getToken, setToken] = useState(token);
  const [getUserName, setUserName] = useState(userName);

  const handleLogout = () => {
    localStorage.clear();
    setToken("");
    setUserName("");
    window.location.href = '../index.html'
    window.reload();
  }

  const goback = () => {
    window.location.href = '../index.html'
  }
    return (
      <div>
        <Loginaccess handleLogout={handleLogout} goback={goback} getToken={getToken} getUserName={getUserName}/>
      </div>
    )

}

export default App
