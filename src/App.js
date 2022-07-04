import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './comp/Home';
import Login from './comp/Login';
import Signup from './comp/Signup';
import Task from './comp/Task';

function App() {
  
  return (
    <div className="App">
      <h1>Welcome to Notes</h1>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path="/tasks" element={<Task />} />
      </Routes>
    </div>
  );
}

export default App;
