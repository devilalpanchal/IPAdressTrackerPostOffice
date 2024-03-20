//  to click get startted button

const mainSection = document.querySelector(".main-section");
const StartContainer = document.querySelector(".Start");

const GetStarted = document.querySelector(".btstart");
GetStarted.addEventListener("click", () => {
  mainSection.classList.toggle("hide");
  StartContainer.classList.add("hide");
});

// to return front Page
const goBack = document.querySelector(".goBack");
goBack.addEventListener("click", () => {
  document.location.reload();
});

// to access post office array

let main = document.querySelector(".main");
const url02 = "https://api.postalpincode.in/pincode/457118";
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
    main.innerHTML = getData.join("");
  })
  .catch((err) => {
    // console.log(err);
  });

// to get date and time
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dateTime = document.querySelector(".dateTime");
const currentdate = new Date();
// console.log(currentdate);
const datetime =
  "   " +
  day[currentdate.getDay()] +
  " / " +
  months[currentdate.getMonth()] +
  " / " +
  currentdate.getFullYear() +
  " & " +
  currentdate.getHours() +
  " : " +
  currentdate.getMinutes() +
  " : " +
  currentdate.getSeconds();
dateTime.innerHTML = datetime;
// console.log(datetime);

// to time zone
const timeZ = document.querySelector(".timeZ");
const timesone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// console.log(timesone);
timeZ.innerHTML = timesone;

// to add serch functionaliy not working

// const search = document.querySelector('.search')
//   search.addEventListener('keyup', () => {

//     let postOffices = data[0].PostOffice;
//     let value= search.value
//     console.log(value)
//     let newArray = postOffices.filter((item) =>
//       item.Name.toLowerCase().includes(value)
//     )

//     console.log(newArray)
//     })

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

// jeet ka code ha ye too
// Add input event listener to searchInput for filtering post offices
//  searchInput.addEventListener('input', () => {
//   const searchTerm = searchInput.value.trim().toLowerCase();
//   const cards = document.querySelectorAll('.card');
//   cards.forEach(card => {
//       const name = card.querySelector('p:first-child span').textContent.toLowerCase();
//       if (name.includes(searchTerm)) {
//           card.style.display = 'block';
//       } else {
//           card.style.display = 'none';
//       }
//   });
// });
