import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Community from './Pages/Community';
import Following from './Pages/Following';
import Explore from './Pages/Explore';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/Community' element={<Community/>}></Route>
        <Route path='/Explore' element={<Explore/>}></Route>
        <Route path='/Following' element={<Following/>}></Route>
      </Routes>
      <Footer/>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
