  
  
  let url = 'https://jsonip.com'
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data.ip)
      document.querySelector('.ipAddress').innerHTML = data.ip
    })
    .catch((err) => {
      // console.log(err)
      let error = new Error()
      console.log(error)
      error.message = 'not valid url'
      console.log(error.message)
    //   document.body.innerHTML=error.message
    })
