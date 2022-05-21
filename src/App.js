import './App.css';
import Navbar from '../src/Pages/Shared/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Review from './Pages/Review/Review';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import Error from './Pages/Error/Error';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/appointment' element={<Appointment />}></Route>
        <Route path='/review' element={<Review />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/*' element={<Error/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
