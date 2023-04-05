import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Student from './Components/Student';
import ContactUs from './Components/ContactUs';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <>
    <div className='app'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/student" element={<Student/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}
export default App;
export default App;