import React from "react";
import UpLift from "./Uplift";
import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <section className="section-margin">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <UpLift />
          </div>
          <div className="col-xl-6 col-lg-6">
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
                <button className="login-button">Login</button>
              </form>
              <Link to="/SignUp">
                <h5 className="mt-3 text-center">
                  New to <b>Uplift</b> ?
                </h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
