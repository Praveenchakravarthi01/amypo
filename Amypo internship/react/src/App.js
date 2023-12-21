import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import img1 from '../assets/Images/img1.jpg'
import './App.css';
import Add from './components/Add';
import { States } from './components/States';
import View from './components/View';
import Update from './components/Update';
import Viewcustomer from './components/Viewcustomer';
import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/User';

function App() {
  return (
    <div className="App">
      {/* <img className='w-1/3 h-screen flex justify-start' src={img1} alt=' '/> */}
      <States>

        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/user" element={<User/>} />
            <Route path="/Add" element={<Add/>} />
            <Route path="/view" element={<View />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/viewCustomer/:id" element={<Viewcustomer />} />
          </Routes>
        </BrowserRouter>
      </States>
    </div>
  );
}

export default App;
