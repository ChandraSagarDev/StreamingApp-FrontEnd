import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componets/Home';
import Login from './componets/Login';
import Faq from './componets/Faq';

function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Faq' element={<Faq/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
