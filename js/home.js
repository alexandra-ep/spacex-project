const nextLaunchUrl = `https://api.spacexdata.com/v3/launches/next`;

function handleResponse(response) {
  return response.json();
}

function handleCountdown(json) {
  console.dir(json);

  /* Countdown timer example (https://www.w3schools.com/howto/howto_js_countdown.asp) */
  setInterval(() => {
    const now = Math.floor(new Date().getTime());

    distance = json.launch_date_unix * 1000 - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector("#days").innerHTML = days;

    document.querySelector("#hours").innerHTML = hours;

    document.querySelector("#minutes").innerHTML = minutes;

    document.querySelector("#seconds").innerHTML = seconds;

    document.querySelector("#missionName").innerHTML = json.mission_name;

    if (distance < 0) {
      clearInterval();
      document.querySelector("#countdown").innerHTML = "Will be updated";
    }
  }, 1000);
}

function handleError(error) {
  console.log(error);
}

fetch(nextLaunchUrl)
  .then(handleResponse)
  .then(handleCountdown)
  .catch(handleError);
