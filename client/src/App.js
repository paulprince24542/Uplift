import './Style.css';
import Home from './Components/Home.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';


function App() {
  return (
<>
<Router>
  <Route path="/" component={Home} />
  <Route path="/SignIn" component={SignIn} />
  <Route path="/SignUp" component={SignUp} />
</Router>
</>
  );
}

export default App;
