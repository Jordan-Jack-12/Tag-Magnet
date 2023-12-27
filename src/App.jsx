
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
    <div className="App" style={{ textAlign: 'center', minHeight: '100vh', background: '#F2F8FF' }}>
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
