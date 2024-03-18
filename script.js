

let url = 'https://jsonip.com'

async function fetchData() {
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

async function fetchDetails() {
  let ip = await fetchData()
  console.log(ip)
  let url1 = `https://ipapi.co/${ip}/json/`
  let response = await fetch(url1)
  let data = await response.json()
  console.log(data)
  // let city = data.city
  let lat = data.latitude
  let lon = data.longitude
  document.querySelector('.iframe').src = `https://maps.google.com/maps?q=${lat}, ${lon}&z=15&output=embed`
  console.log(lat);
  console.log(lon);
}
fetchDetails()



// to access post office array

let main = document.querySelector('.main')

  fetch('https://api.postalpincode.in/pincode/457118')
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
      </div>`;
    });
    main.innerHTML = getData.join('');
  })
  .catch((err) => {
    console.log(err);
  });

  const goBack = document.querySelector('.goBack')
  goBack.addEventListener('click',()=>{
  // mainSection.classList.toggle('hide')
  document.location.reload()
  
    })

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
