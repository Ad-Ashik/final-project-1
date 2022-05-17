import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Appoinment from './Pages/Appoinmnet/Appoinment';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appoinment></Appoinment>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
