import "./Style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
