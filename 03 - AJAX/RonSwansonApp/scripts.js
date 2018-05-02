//////////////////////////////////
// API DOCUMENTATION
// NO DOCUMENTATION
//////////////////////////////////

const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

let type = document.querySelector('#type')
let quote = document.querySelector('#quote')

//////////////////////
// XHR request
//////////////////////

function xhrReq() {
  const XHR = new XMLHttpRequest;
  XHR.open('GET', url);
  XHR.send();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      quote.innerText = JSON.parse(XHR.responseText)
      type.innerText = 'XHR'
    }
  }
}

//////////////////////
// Fetch request
//////////////////////

function fetchReq() {
  fetch(url)
  .then((data)=>{
    return data.json()
  })
  .then((data)=>{
    quote.innerText = data;
    type.innerText = 'Fetch'
  })
  .catch(()=>{
    console.log('Error with FETCH')
  })
}

//////////////////////
// jQuery request
//////////////////////

function jqueryReq() {
  $.getJSON(url)
  .done( (data) =>{
    $('#quote').text(data);
    $('#type').text('jQuery');
  })
  .fail(()=>{
    console.log("Error w/ JQUERY")
  })
}

//////////////////////
// Axios request
//////////////////////

function axiosReq() {
  axios.get(url)
  .then((res)=>{
    quote.innerText = res.data;
    type.innerText = 'Axios'
  })
}
