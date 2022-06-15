// import logo from './logo.svg';
 import './App.css';
// import Process from './pages/Process';
import Footer from './components/Footer';
import { InitialFocus } from './components/Modal';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Subscribe from './pages/Subscribe';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
      {/* <Subscribe/> */}
      {/* <Process/> */}
      {/* <Modal/> */}
      {/* <InitialFocus/> */}
    </div>
  );
}

export default App;
