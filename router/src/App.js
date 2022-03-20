import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';

function App() {
  return (
   <BrowserRouter>
   <nav>
    <Link to="">Home</Link>
    <Link to="profile">Profile</Link>
   </nav>
    <Routes>
      {/* v6부터 exact props가 사라짐*/}
      <Route path ="" element={<Home />}/>
      <Route path ="home" element={<Home />}/>
      <Route path ="profile" element={<Profile />}>
        {/* v6 outlet 기능으로 인한 Route 내 children Route 작업 */}
        <Route path ="" element={<Home />}/>
      </Route>

    </Routes>
   </BrowserRouter>
  );
}

export default App;
