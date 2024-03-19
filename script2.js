
async function fetchData() {
    let url = 'https://jsonip.com'

    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data.ip)
            console.log(data)
            // document.querySelector('.ipAddress').innerHTML = data.ip
            // document.querySelector('.ipAddress2').innerHTML = data.ip
            // console.log(data);

        })
        .catch((err) => {
            let error = new Error()
            // console.log(error)
            error.message = 'not valid url'
            // console.log(error.message)
            document.querySelector('.ipAddress').innerHTML = error.message
        })

};
fetchData()



async function fetchDetails() {
    try {
        let ip = await fetchData();
        console.log(ip);

        let url1 = `https://ipapi.co/${ip}/json/`;
        let response = await fetch(url1);
        let data = await response.json();
        console.log(data[0]);

          let lat = data.latitude;
          let lon = data.longitude;
          let city = data.City; 
          let region = data.region;
          let organization = data.org; 
          let hostname = data.hostname; 
          document.querySelector('.latitude').innerHTML = lat;
          document.querySelector('.longitude').innerHTML = lon;
          document.querySelector('.city').innerHTML = city;
          document.querySelector('.region').innerHTML = region;
          document.querySelector('.organization').innerHTML = organization;
          document.querySelector('.hostName').innerHTML = navigator.platform;

        document.querySelector('iframe').src = `https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed`;
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchDetails();
fetchData()


