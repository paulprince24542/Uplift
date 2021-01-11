import "./Style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./Components/Login";
import SignUp from "./Components/SignUp";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={LogIn} />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
      </Router>
  );
}

export default App;
