import About from './components/About';
import StaticWork from './components/StaticWorks';
import StaticContactInfo from './components/StaticContactInfo';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div >
      <Navbar />
      <SocialLinks />
      <Home />
      <About />
      <Skills />
      <StaticWork/>
      {/* <Works /> */}
      {/* <Contact /> */}
      <StaticContactInfo/>
    </div>
  );
}

export default App;