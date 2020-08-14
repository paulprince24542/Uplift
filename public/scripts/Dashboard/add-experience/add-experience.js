async function experience() {


    const role = document.getElementById("job").value
    const company = document.getElementById("company").value;
    const location = document.getElementById("location").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const current = document.getElementById("current").value;
    const details = document.getElementById("details").value;
    console.log(current)

    const data = JSON.stringify({
        role: role,
        company: company,
        country: location,
        from: from,
        to: to,
        details: details
    });

    const rawResponse = await fetch("/api/profile/workrole", {
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
    // console.log(rawResponse);
    // const content = await rawResponse.json();
    // console.log(content);
}
