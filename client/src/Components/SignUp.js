import React from "react";
import UpLift from "./Uplift";
import { Link } from "react-router-dom";

export default function SignUp() {
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
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingRepeatPassword"
                    placeholder="Repeat Password"
                  />
                  <label for="floatingRepeatPassword">Repeat Password</label>
                </div>
                <button className="login-button">SignUp</button>
              </form>
              <Link to="/">
                <h5 className="mt-3 text-center">
                  Already have an <b>Uplift</b> account ?
                </h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
