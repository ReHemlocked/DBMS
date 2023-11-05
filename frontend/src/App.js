import logo from './logo.svg';
import { Home } from './Home';
import { Auth } from './Auth';
import { Test } from './test';
import './App.css';
import { SideBar } from './SideBar';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import { Create } from './Create';
import { GetStories } from './Stories';
import { Messaging } from './messaging';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Auth/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/stories' element={<GetStories/>}></Route>
          <Route path='/messages' element={<Messaging/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
