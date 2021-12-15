import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element ={<Layout />}>
          <Route path = "/" element = {<Home />} />
          <Route path = "/register" element = {<Register />} />
          <Route path = "/login" element = {<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
