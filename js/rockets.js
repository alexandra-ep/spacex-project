const rocketsUrl = `https://api.spacexdata.com/v3/rockets`;

function handleResponse(response) {
  return response.json();
}

function handleRockets(json) {
  console.dir(json);

  const rocketsContainer = document.querySelector(".cardRocket");

  let html = "";

  json.forEach(function (result) {
    if(result.active === true) {
      html += `<h2 class="subheading">${result.rocket_name}</h2>
      <div class="rockets">
          <div id="rocketsImage">
              <img src="${result.flickr_images}" alt="Picture of ${result.rocket_name}">
          </div>
          <div id="textContainer">
              <div id="rocketsText">
                  <p>${result.description}</p>
                  <p>First flight: ${result.first_flight}</p>
                  <p>For more information <a href="${result.wikipedia}" title="Link for more information">click here</a></p>
              </div>
          </div>
      </div>`;
    } else {
      html += "";
    }
  });
  rocketsContainer.innerHTML = html;
}

function handleError(error) {
  console.log(error);
}

fetch(rocketsUrl)
  .then(handleResponse)
  .then(handleRockets)
  .catch(handleError);
