import { useEffect, useState } from 'react';
import Loginaccess from './components/Loginaccess';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import axios from 'axios';
import './App.css'

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

  const [getSwitch, setSwitch] = useState("home")

  const switchBetween = (content) => {
    setSwitch(content);
  }
  
  const [postList, setPostList] = useState([]);


  useEffect(() => {
    const controller = new AbortController();
    const {signal} = controller;
    const fetchPosts = async() => {
      try{
        const {data} = await axios.get('http://localhost:8081/posts', signal);
        setPostList(data);
      }catch(err) {
        console.log("Error", err)
      }
    }
    fetchPosts();
  }, [])
    return (
      <div>
        <Loginaccess handleLogout={handleLogout} goback={goback} getToken={getToken} getUserName={getUserName}/>
        <Header switchBetween={switchBetween} getSwitch={getSwitch}/>
        <Dashboard postList={postList}/>
      </div>
    )

}

export default App
