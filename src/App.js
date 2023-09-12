import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Addstalls from './components/addstalls';
import Attachrentfee from './components/attachrentfee';
import Dashboard from './components/Dashboard';
import PricingStalls from './components/PricingStalls';
import Attachtenant from './components/attachtenant';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/addstalls' element={<Addstalls/>}/>
      <Route path='/pricing' element={<PricingStalls/>}/>
      <Route path='/arf' element={<Attachrentfee/>}/>
      <Route path='/attachtenant' element={<Attachtenant/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
