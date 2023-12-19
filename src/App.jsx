import './App.css';
import { Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className='App'>
      <div className="container">
        <NavBar/>
        <Outlet/>
        <ToastContainer position='top-right'/>
      </div>
    </div>
  );
}

export default App;