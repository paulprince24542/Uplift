function logout() {
    var url = "/api/auth/logout"
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); // false for synchronous request
    window.location.assign("/login");
    // fetch(url)
    //     .then(data => {
    //         return data.json()
    //     })
    //     .then(res => {
    //         console.log(res)
    //     })

}