import React from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="login-box">
      <form>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button>SignIn</button>
      </form>
      <Link to="/SignUp">
        <h5 className="mt-3 text-center">
          New to <b>Uplift</b> ?
        </h5>
      </Link>
    </div>
  );
}
