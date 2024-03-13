import { useState } from 'react';
import './App.css'
import Loginaccess from './components/Loginaccess';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

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
        <Header />
        <Dashboard />
      </div>
    )

}

export default App
