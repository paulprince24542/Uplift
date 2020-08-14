async function updateProfile() {

    const username = document.getElementById("username").value;
    const website = document.getElementById("website").value;
    const country = document.getElementById("country").value;
    const languages = document.getElementById("language").value;
    const portfolio = document.getElementById("portfolio").value;
    const youtube = document.getElementById("youtube").value;
    const instagram = document.getElementById("instagram").value;
    const facebook = document.getElementById("facebook").value;
    const linkedin = document.getElementById("linkedin").value;

    const data = JSON.stringify({
        username: username,
        website: website,
        country: country,
        languages: languages,
        portfolio: portfolio,
        youtube: youtube,
        instagram: instagram,
        facebook: facebook,
        linkedin: linkedin
    });

    const rawResponse = await fetch("/api/profile", {
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
    // window.location.assign("/dashboard");
    location.reload()
    console.log(rawResponse);
    const content = await rawResponse.json();
    console.log(content);
}
