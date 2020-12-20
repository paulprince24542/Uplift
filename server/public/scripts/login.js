async function login() {

  var token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const data = JSON.stringify({
    email: email,
    password: password,
  });

  const rawResponse = await fetch("/api/auth/login", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      'CSRF-Token': token
    },
    body: data,
  });
  // submitBtn.addEventListener("click", function (evt) {
  //   evt.preventDefault();
  //   window.location.replace("/register");
  //   return false;
  // });
  window.location.assign("/dashboard");
  console.log(rawResponse);
  const content = await rawResponse.json();
  console.log(content);
}
