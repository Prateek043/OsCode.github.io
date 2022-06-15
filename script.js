const scriptURL = 'https://script.google.com/macros/s/AKfycbxgLOEJ_u4_reACkwur8-SQE6RUvBzW7nuLHmtt91_k3nxvsnaVeFfYWRyR3FaAtBI/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {

e.preventDefault()

fetch(scriptURL, { method: 'POST', body: new FormData(form)}) .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon...")) 

.catch(error => console.error('Error!', error.message))
})


function showTime() {
	document.getElementById('currentTime').innerHTML = new Date();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
