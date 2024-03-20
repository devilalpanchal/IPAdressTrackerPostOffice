async function fetchData() {
  let url = "https://jsonip.com";

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data.ip);
      console.log(data);
      document.querySelector(".ipAddress").innerHTML = data.ip;
      document.querySelector(".ipAddress2").innerHTML = data.ip;
    })
    .catch((err) => {
      let error = new Error();
      // console.log(error)
      error.message = "not valid url";
      console.log(error.message);
      document.querySelector(".ipAddress").innerHTML = error.message;
    });
}
fetchData();

async function fetchDetails() {
  try {
    let url1 = "https://jsonip.com";
    let response = await fetch(url1);
    let data1 = await response.json();
    let url2 = `https://ipapi.co/${data1.ip}/json/`;
    let response1 = await fetch(url2);

    let data = await response1.json();
    console.log(data);
    let lat = data.latitude;
    let lon = data.longitude;
    let city = data.city;
    let region = data.region;
    let organization = data.org;

    document.querySelector(".latitude").innerHTML = lat;
    document.querySelector(".longitude").innerHTML = lon;
    document.querySelector(".city").innerHTML = city;
    document.querySelector(".region").innerHTML = region;
    document.querySelector(".organization").innerHTML = organization;
    document.querySelector(".hostName").innerHTML = navigator.platform;

    let timeZone = data.timezone;
    // let dateandTime = data.city;
    let Pincode = data.postal;
    // let message = data.org;
    document.querySelector(".timeZ").innerHTML = timeZone;
    document.querySelector(".pincodeSecond").innerHTML = Pincode;

    document.querySelector(
      "iframe"
    ).src = `https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed`;
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchDetails();
fetchData();
