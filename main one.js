
const scriptURL = 'https://script.google.com/macros/s/AKfycbzTCIh1vPYM5tVWBEXBtQcOIRHrob9kgy1wKYNConyN2A85asqhCiXC1ESx8tBl6uUA/exec'
  const form = document.forms['form']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
          msg.innerHTML= " "
        },2000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })