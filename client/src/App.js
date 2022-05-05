// Components
import Hero from "./components/hero"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Login from "./components/login"
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
