import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Components/Dashboard';

function App() {
  return (
  <>
  <ToastContainer position='bottom-center'></ToastContainer>
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
     </BrowserRouter>
    </div>
    </>
  );
}

export default App;