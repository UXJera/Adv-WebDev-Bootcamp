//////////////////////////////////
// API DOCUMENTATION
// https://www.coindesk.com/api/
//////////////////////////////////

const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

var price = document.querySelector('#price');
var refresh = document.querySelector('#refresh');
var currency = document.querySelectorAll("input[name='currency']");
var gbp = document.querySelector("#gbp");
var usd = document.querySelector("#usd");
var eur = document.querySelector("#eur");

var XHR = new XMLHttpRequest();

function createRequest() {
  fetch(url).then((res)=>{
    return res.json();
  }).then((data)=>{
    for (var i = 0; i < currency.length; i++) {
      if(currency[i].checked){
        var data = data;
        price.innerHTML = data.bpi[currency[i].value].symbol + data.bpi[currency[i].value].rate + ' ' + currency[i].value;
        refresh.innerText = data.time.updated;
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", createRequest);
gbp.addEventListener("click", createRequest);
usd.addEventListener("click", createRequest);
eur.addEventListener("click", createRequest);
