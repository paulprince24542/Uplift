async function addProfile() {


    const username = document.getElementById("username").value
    const website = document.getElementById("website").value;
    const country = document.getElementById("country").value;
    const languages = document.getElementById("country").value;
    const youtube = document.getElementById("youtube").value;
    const facebook = document.getElementById("facebook").value;
    const instagram = document.getElementById("instagram").value;
    const linkedin = document.getElementById("linkedin").value;

    const data = JSON.stringify({
        username: username,
        website: website,
        country: country,
        youtube: youtube,
        languages:languages,
        facebook: facebook,
        instagram: instagram,
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
    // console.log(rawResponse);
    // const content = await rawResponse.json();
    // console.log(content);
}
