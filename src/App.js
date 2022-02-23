import React from 'react';
import './App.css';
import Nav from './Nav';
import CSSTest from './CSSTest';
import Booking from './Booking';
import BookDetail from './BookDetail';
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/CSSTest' element={<CSSTest/>} />
          <Route path='/booking' exact element={<Booking/>} />
          <Route path='/booking/:roomNo' element={<BookDetail/>} />
        </Routes>
      </div>
  </BrowserRouter>
  );
}

const Home = () => {
  return(
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default App;
