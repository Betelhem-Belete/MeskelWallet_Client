import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Edit from './Components/Edit';
import Login from "./pages/Login";
import { UseAuthContext } from "./Hooks/useAuthContext";


import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  const { user } = UseAuthContext();

  return (
      <BrowserRouter>
      <Navbar />
      <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/login" element={user ? <Home />:<Login />} />
        <Route path='/dashboard' element={user ? <Dashboard />:<Home />}></Route>
        <Route path='/edit/:id' element={<Edit />}></Route>
        
      </Routes> 
      </div>
      </BrowserRouter>
  );
}

export default App;
