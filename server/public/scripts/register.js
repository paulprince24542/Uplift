async function register() {


    const name = document.getElementById("name").value
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    const password = document.getElementById("password").value;
    // const confirmPassword = document.getElementById("confirmPassword").value;

    const data = JSON.stringify({
        name: name,
        email: email,
        password: password,
        gender: gender,
    });

    const rawResponse = await fetch("/api/auth/register", {
        method: "POST",
        credentials: "same-origin",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: data,
    });
    // submitBtn.addEventListener("click", function (evt) {
    //   evt.preventDefault();
    //   window.location.replace("/register");
    //   return false;
    // });
    window.location.assign("/login");
    // console.log(rawResponse);
    // const content = await rawResponse.json();
    // console.log(content);
}
