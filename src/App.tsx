import GlobalStyle from './components/GlobalStyle';
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <Nav/>
        <Routes>
            <Route path="/" element={<AboutUs/>}></Route>
            <Route path="work" element={<OurWork/>}></Route>
            <Route path="contact" element={<ContactUs/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
