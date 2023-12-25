
import {Routes, Route} from 'react-router-dom'


import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from './pages/HomePage';
import About from './pages/About';
import Disclaimer from './pages/Disclaimer';
import PrivacyPolicies from './pages/PrivacyPolicies';
import TermsAndConditions from './pages/TermsAndConditions'
import NotFound from './pages/NotFound';

function App() {



  return (
    <div className="App" style={{ textAlign: 'center', height: '100vh', background: '#F2F8FF' }}>
      {/* <Heading bg="linear-gradient(90deg, rgba(76,173,239,1) 0%, rgba(8,124,172,1) 50%, rgba(76,173,239,1) 100%)" color="white" padding={'4'}>Tag Magnet</Heading> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/terms-and-conditions' element={<TermsAndConditions/>}/>
        <Route path='/disclaimer' element={<Disclaimer/>}/>
        <Route path='/privacy-policies' element={<PrivacyPolicies/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
