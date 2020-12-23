import React from 'react'
import SignIn from './SignIn';
// import SignUp from './SignUp';
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div>
                <section className="section-margin">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6">
                    <div className="content">
                        <h1>UpLift</h1>
                        <p>
                            Create a developer profile/portfolio, share posts
                            and get help from other developers
                        </p>
                    </div>
                    <div
                        className="social-media-icons d-flex justify-content-evenly">
                        <a href="#"><i className="fab fa-github fa-2x" /></a>
                        <a href="#"><i className="fab fa-facebook-f fa-2x" /></a>
                        <a href="#"><i className="fab fa-instagram fa-2x" /></a>
                    </div>
                    <div className="d-none d-lg-block">
                        <Link to="/SignUp"><h5>New to <b>Uplift</b> ?</h5></Link>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <SignIn/>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}
