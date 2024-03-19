


async function fetchData() {
let url = 'https://jsonip.com'

fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data.ip)
        document.querySelector('.ipAddress').innerHTML = data.ip
        document.querySelector('.ipAddress2').innerHTML = data.ip
// console.log(data);

    })
    .catch((err) => {
        let error = new Error()
        console.log(error)
        error.message = 'not valid url'
        console.log(error.message)
        document.querySelector('.ipAddress').innerHTML = error.message
    })

fetchData()



//  to click get startted button

const mainSection = document.querySelector('.main-section')
const StartContainer = document.querySelector('.Start')


const GetStarted = document.querySelector('.btstart')
GetStarted.addEventListener('click', () => {
mainSection.classList.toggle('hide')
StartContainer.classList.add('hide')
})
}



// currently it is not working

// async function fetchDetails() {
//   let ip = await fetchData()
//   console.log(ip)
//   let url1 = `https://ipapi.co/${ip}/json/`
//   let response = await fetch(url)
//   let data = await response.json()
//   console.log(data)
//   // let city = data.city
//   // let lat = data.latitude
//   // let lon = data.longitude
//   // document.querySelector('.iframe').src = `https://maps.google.com/maps?q=${lat}, ${lon}&z=15&output=embed`
//   // console.log(lat);
//   // console.log(lon);
// }
// fetchDetails()

// async function fetchData() {
//   let response = await fetch('https://jsonip.com');
//   let data = await response.json();
//   return data.ip;
// }

async function fetchDetails() {
  try {
    let ip = await fetchData();
    console.log(ip);

    let url1 = `https://ipapi.co/${ip}/json/`;
    let response = await fetch(url1);
    let data = await response.json();
    console.log(data);

    let lat = data.latitude;
    let lon = data.longitude;
    let city = data.City; 
    let region = data.region;
    let organization = data.org; 
    let hostname = data.hostname; 
// console.log(hostname)
    document.querySelector('.latitude').innerHTML = lat;
    document.querySelector('.longitude').innerHTML = lon;
    document.querySelector('.city').innerHTML = city;
    document.querySelector('.region').innerHTML = region;
    document.querySelector('.organization').innerHTML = organization;
    document.querySelector('.hostName').innerHTML = hostname;

    document.querySelector('iframe').src = `https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed`;
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchDetails();
fetchData()





// to access post office array

let main = document.querySelector('.main')
const url02 = 'https://api.postalpincode.in/pincode/457118'
  fetch(url02)
  .then((response) => response.json())
  .then((data) => {
    let postOffices = data[0].PostOffice; // Access the PostOffice array
    let getData = postOffices.map((item) => {
      return `<div class="card">
      <h2>${item.Name}</h2>
      <p>Branch  : ${item.BranchType}</p>
      <p>Status : ${item.DeliveryStatus}</p>
      <p>District : ${item.District}</p>
      <p>Division : ${item.Division}</p>
      </div>
      `;
    });
    main.innerHTML = getData.join('');
  })
  .catch((err) => {
    // console.log(err);
  });



// to access post office for more information

// let info = document.querySelector('.moreInformation')
// const url03 = 'https://api.postalpincode.in/pincode/457118'
//   fetch(url03)
//   .then((response) => response.json())
//   .then(() => {
//     let getData1 = postOffices.map((item) => {
//       return `
//       <span style="color: white;" class="pincode12">
//       <p>Pincode : ${item.}</p>
//       </span>
//       `;
//     });
//     info.innerHTML = getData1.join('');
//   })
//   .catch((err) => {
//     console.log(err);
//   });



  // to return front Page
  const goBack = document.querySelector('.goBack')
  goBack.addEventListener('click',()=>{
  document.location.reload()
    })



// to get date and time
const dateTime = document.querySelector('.dateTime')
const currentdate = new Date();
const datetime = "   " + currentdate.getDay() + "/" + currentdate.getMonth()
+ "/" + currentdate.getFullYear() + " @ " 
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();
dateTime.innerHTML = datetime
console.log(datetime);



// to time zone
const timeZ = document.querySelector('.timeZ')
const timesone = Intl.DateTimeFormat().resolvedOptions().timeZone
console.log(timesone);
timeZ.innerHTML = timesone















    // to add serch functionaliy
    // input.addEventListener('keyup', () => {
    //   let value=input.value
    //   console.log(value)
    //   let newArray = url02.filter((item) =>
    //     item.Name.toLowerCase().includes(value)
    //   )
      
    //   console.log(newArray)
    //   // getContainer(newArray, tbody)
      
    //   })
// this code is to check array of ip address
// async function fetchData() {
//   let a = await fetch('https://jsonip.com')
//   console.log(a)
//   let b = await a.json()
//   console.log(b)
//   return b.ip
// }

// this code is check the array of post office
// async function fetchPostOfficeData() {
//   let p = await fetch('https://api.postalpincode.in/pincode/457118')
//   console.log(p);
//   let q = await p.json()
//   console.log(q);
// }
// fetchPostOfficeData()
