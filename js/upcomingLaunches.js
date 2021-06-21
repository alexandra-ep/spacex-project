const upcomingUrl = `https://api.spacexdata.com/v3/launches/upcoming`;

function handleResponse(response) {
    return response.json();
}

function convertDate(launchDate) {
    let date = new Date(launchDate*1000);  
    return date.toLocaleDateString();
} 

function handleLaunches(json) {
    console.dir(json);

    const upcomingContainer = document.querySelector("#containerUpcoming");

    let html = "";

    json.forEach(function(result) {
        html += `<div class="card">
        <span class="resultsHeading">${result.mission_name}</span>
        <p>Launch date: <span class="results">${convertDate(result.launch_date_unix)}</span></p>
        <p>Rocket name: <span class="results">${result.rocket.rocket_name}</span></p>
        <p>Launch site: <span class="results">${result.launch_site.site_name_long}</span></p>
    </div>`
    });
    upcomingContainer.innerHTML = html;
}

function handleError(error) {
    console.log(error);
}

fetch(upcomingUrl)
    .then(handleResponse)
    .then(handleLaunches)
    .catch(handleError);