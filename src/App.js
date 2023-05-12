import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Community from './Pages/Community';
import Following from './Pages/Following';
import Explore from './Pages/Explore';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/' element={<Community/>}></Route>
        <Route path='/' element={<Explore/>}></Route>
        <Route path='/' element={<Following/>}></Route>
      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
