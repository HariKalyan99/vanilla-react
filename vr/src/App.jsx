import Loginaccess from './components/Loginaccess';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Createpost from './components/Createpost';
import BlogsStoreContextProvider from './store/Blogsstore';
import './App.css'




function App() {
    return (
      <BlogsStoreContextProvider>
        <Loginaccess  />
        <Header />
        <Dashboard />
        <Createpost  />
      </BlogsStoreContextProvider>
    )

}

export default App
