import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Auth from './Auth';
import Main from './Main';
import Forms from './Forms';






function App() {
  return (
    <div className="App">

      
      <Routes>
        
        <Route path='/'  element={<Home/>} />
        <Route  path='/login'  element={<Auth/>} />
        <Route  path='/register'  element={<Auth register />} />
        <Route  path='/main'  element={<Main/>} />
       <Route path='/form' element={<Forms/>}/>
        
       

      </Routes>
      
    </div>
  );
}

export default App;
