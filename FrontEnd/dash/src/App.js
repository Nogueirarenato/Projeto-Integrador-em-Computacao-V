
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './Pages/About';
import AllDrives from './Pages/AllDrives';
import Contact from './Pages/Contact';
import CurrentMonth from './Pages/CurrentMonth';
import Index from './Pages/Index';
import Services from './Pages/Services';
import Temperature from './Pages/Temperatures';
import SideMenu from './Components/SideMenu';






function App() {
  return (

    
    <Router>
      <div>

        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='sobrenos' element={<About />} />
          <Route path='todosacionamentos' element={<AllDrives />} />
          <Route path='contato' element={<Contact />} />
          <Route path='mesatual' element={<CurrentMonth />} />
          <Route path='servicos' element={<Services />} />
          <Route path='temperatura' element={<Temperature />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
 
 
 
 
 
 
 
 
 
