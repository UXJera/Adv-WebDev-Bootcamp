//////////////////////////////////
// API DOCUMENTATION
// https://randomuser.me/
//////////////////////////////////

const url = 'https://randomuser.me/api/';

let userAvatar = document.querySelector('#avatar');
let userName = document.querySelector('#fullname');
let userHandle = document.querySelector('#username');
let userEmail = document.querySelector('#email');
let userCity = document.querySelector('#city');

function createUser() {
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateProfile)
}

// Not sure how this works
// const parseJSON = (res) => res.json().then((data) => data.results[0]);

function parseJSON (res){
  return res.json().then((data)=> {
    return data.results[0]
  });
}

function updateProfile(userData) {
  userAvatar.src        = userData.picture.medium;
  userName.innerText    = userData.name.first + " " + userData.name.last;
  userHandle.innerText  = userData.login.username;
  userEmail.innerText   = userData.email;
  userCity.innerText    = userData.location.city;
}

function handleErrors(req) {
  if(!req.ok){
    throw Error(req.status)
  }
  return req;
}
