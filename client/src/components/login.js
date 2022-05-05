import {
  Container,
  Row,
  Col,
  Label,
  Input,
  Form,
  FormGroup,
  FormText,
  Button,
} from "reactstrap";
import "./css/login.css";
import { useState } from "react";

import Footer from "./footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    // event.preventDefault();
    var body = JSON.stringify({
      email,
      password,
    });
    alert(body)
  };

  return (
    <div>
      <Container className="login-container" fluid>
        <Row>
          <Col className="side1" xl="6">
            <div>
              <h1 className="heading-1">Welcome to Uplift...</h1>
              <p className="heading-2">Please login into your account</p>
            </div>
          </Col>
          <Col className="side2" xl="6">
            <div>
              <form className="main-form" onSubmit={handleSubmit}>
                <h1 className="form-head">Login to your account</h1>
                <br></br>
                <label className="login-label">Username</label>
                <br></br>
                <input
                  className="login-input"
                  onChange={handleEmailChange}
                  value={email}
                  type="text"
                ></input>
                <br></br>
                <br></br>
                <label className="login-label">Password</label>
                <br></br>
                <input
                  className="login-input"
                  onChange={handlePasswordChange}
                  value={password}
                  type="password"
                ></input>
                <br></br>
                <br></br>
                <button type="submit" className="login-button">
                  Login
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Login;
