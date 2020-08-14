async function addEducation() {

    const school = document.getElementById("school").value
    const degree = document.getElementById("degree").value;
    const course = document.getElementById("course").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const current = document.getElementById("current").value;
    const form = document.getElementById("form")


    // ///Convert the dates to ISO String Date
    // const fromDateobj = new Date(from);
    // const toDateobj = new Date(to);

    // var isoFrom = fromDateobj.toISOString();
    // var isoTo = toDateobj.toISOString();
    // console.log(isoFrom);
    // console.log(isoTo);

    const data = JSON.stringify({
        school: school,
        degree: degree,
        course: course,
        from: from,
        to: to,
    });

    const rawResponse = await fetch("/api/profile/education", {
        method: "POST",
        credentials: "same-origin",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: data,
    });
    form.reset();
}
