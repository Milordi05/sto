

    const scriptURL = 'https://script.google.com/macros/s/AKfycbw0yp8fiRA53QBb9phVSLOs5QKroSOAZzlKqvHDQFerFgx2F-Z27vuwA1c-A3KJGSjD/exec'
    const form = document.forms['google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then( window.open("../files/thankyou.html"))
.catch(error => console.error('Error!', error.message))         
    })
   




