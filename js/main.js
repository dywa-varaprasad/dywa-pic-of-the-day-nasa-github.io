//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  const url = `http://api.nasa.gov/planetary/apod?api_key=EEV506UKhK0eW7Ct5pS9VKOnzpePBa34XWnxtKzF&date=${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      if (data.media_type === "image") {
        document.querySelector("img").src = data.hdurl;
        document.querySelector("h3").innerText = data.explanation;
      } else if (data.media_type === "video") {
        document.querySelector("iframe").src = data.url;
        document.querySelector("h3").innerText = data.explanation;

        console.log(data);
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
