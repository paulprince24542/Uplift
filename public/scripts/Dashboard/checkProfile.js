

async function checkProfile() {

    //Get the imput Field
    const addProfile = document.getElementById("addButton");
    const editProfile = document.getElementById("editButton");


    const URL = "/api/profile/checkProfile";
    const fetchResult = fetch(URL)
    const response = await fetchResult;
    const jsonData = await response.json();
    console.log(jsonData)
    if(jsonData == "true"){
        addProfile.style.visibility = "hidden"
    }
    else if(jsonData == "false"){
        editProfile.style.visibility = "hidden"
    }
}
