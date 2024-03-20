import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Auth from './Auth';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';




function App() {
  return (
    <div className="App">

      <Header/>
      <Routes>
        
        <Route path='/'  element={<Home/>} />
        <Route  path='/login'  element={<Auth/>} />
        <Route  path='/register'  element={<Auth register />} />
        <Route  path='/main'  element={<Main/>} />
       

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
