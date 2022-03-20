import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';

function App() {
  return (
   <BrowserRouter>
   <nav>
    <Link to="/">Home</Link>
    <Link to="/profile">Profile</Link>
   </nav>
    <Switch>
      {/* exact를 넣는 이유: / 다음에 home 이외 다른 주소가 들어갔을때도 home 으로 보내는 것을 방지 */}
      <Route exact path ={['/','/home']}>
        <Home />
      </Route>
      <Route path ="/profile">
        <Profile />
      </Route>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
