import logo from './logo.svg';
import { Home } from './Home';
import { Auth } from './Auth';
import { Test } from './test';
import './App.css';
import { SideBar } from './SideBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Create } from './Create';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/Auths' element={<Auth/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Create' element={<Create/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
