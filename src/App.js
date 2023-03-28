// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Exercises from './components/UI/Exercises';
import Hero from './components/UI/Hero';
import Pricing from './components/UI/Pricing';
import Start from './components/UI/Start';
import Testimonial from './components/UI/Testimonial';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Exercises />
      <Start />
      <Pricing />
      <Testimonial />
    
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
