

let url = 'https://jsonip.com'

// async function fetchData() {
// fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => {
//         console.log(data.ip)
//         document.querySelector('.ipAddress').innerHTML = data.ip
//     })
//     .catch((err) => {
//         let error = new Error()
//         console.log(error)
//         error.message = 'not valid url'
//         console.log(error.message)
//         document.querySelector('.ipAddress').innerHTMLL = error.message
//     })



// const GetStarted = document.querySelector('.btstart')
// GetStarted.addEventListener('click', () => {

// })
// }
async function fetchData() {
    let a = await fetch('https://jsonip.com')
    console.log(a)
    let b = await a.json()
    console.log(b)
    return b.ip
  }

async function fetchDetails() {
    let ip = await fetchData()
  
    console.log(ip)
    let url = `https://ipapi.co/${ip}/json/`
  let response=await fetch(url)
  let data=await response.json()
  console.log(data)
  let lat=data.latitude
  let lon=data.longitude
  document.querySelector(
    'iframe'
  ).src = `https://maps.google.com/maps?q=${lat}, ${lon}&z=15&output=embed`
  
  }
  fetchDetails()
  // fetchData()