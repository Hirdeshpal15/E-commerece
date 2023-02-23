import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Pages
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home, Contact, Login, Register, Reset } from './pages/index';
// components
import { Header, Footer } from './components/index';

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/reset' element={<Reset />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
