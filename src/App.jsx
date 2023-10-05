import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Edit from './Components/Edit';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Footer from './Components/Footer';

function App() {

  return (
      <BrowserRouter>
      <Navbar />
      <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/add' element={<Dashboard />}></Route>
        <Route path='/edit/:id' element={<Edit />}></Route>
      </Routes> 
      {/* <Fotter /> */}
      </div>
      </BrowserRouter>
  );
}

export default App;
