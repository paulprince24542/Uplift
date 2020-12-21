<script>
</script>

<style>
    .content {
        padding: 20px;
        margin-right: 50px;
    }

    h1 {
        color: var(--primary-color);
        display: flex;
        justify-content: center;
        align-items: center;
    }

h5 {
    text-align: center;
    margin-top: 15px;
}

    p {
        text-align: center;
        margin-top: 20px;
    }

    @media (max-width: 767px) {
        .content {
            padding: 10px;
            margin-right: 0px;
        }
    }

    .login-box {
        box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.73);
        border-radius: 10px;
        padding: 80px 40px;
    }

    input:focus {
        border: none;
        border-left: 8px solid var(--primary-color);
        border-radius: 10px;
        box-shadow: none;
    }

    button {
        width: 100%;
        margin-top: 20px;
    }

    .social-media-icons {
        margin-top: 10px;
        margin-bottom: 35px;
    }

    .social-media-icons i {
        color: var(--primary-color);
    }
</style>

<main>
    <section class="section-margin">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <div class="content">
                        <h1>UpLift</h1>
                        <p>
                            Create a developer profile/portfolio, share posts
                            and get help from other developers
                        </p>
                    </div>
                    <div
                        class="social-media-icons d-flex justify-content-evenly">
                        <a href="#"><i class="fab fa-github fa-2x" /></a>
                        <a href="#"><i class="fab fa-facebook-f fa-2x" /></a>
                        <a href="#"><i class="fab fa-instagram fa-2x" /></a>
                    </div>
                    <div class="d-none d-lg-block">
                        <a href="#"><h5>New to <b>Uplift</b> ?</h5></a>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="login-box">
                        <form>
                            <div class="form-floating mb-3">
                                <input
                                    type="email"
                                    class="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input
                                    type="password"
                                    class="form-control"
                                    id="floatingPassword"
                                    placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <button on:submit>SignIn</button>
                        </form>
                    </div>
                    <div class="d-lg-none">
                        <a href="#"><h5>New to <b>Uplift</b> ?</h5></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
