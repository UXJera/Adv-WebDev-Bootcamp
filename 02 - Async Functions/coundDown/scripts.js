// Function prints time to console every second and decreases until 0, at 0, special message

// function countDown(seconds) {
//   var remaining = time;
//   var ms = remaining * 1000;
//   setInterval(function() {
//     for(var i = remaining; i > 0; i--){
//       if (i > 0) {
//         setTimeout(function(){
//           console.log(i + ' seconds remaining')}, 1000)
//       }
//       console.log('Ring Ring Ring!!!');
//       clearInterval(this);
//     }
//   }, 1000);
// }

// countDown(5);

function countDown(seconds) {
  var intervalId = setInterval(function() {
    seconds--;
    if (seconds > 0) {
      console.log("Timer:", seconds);
    } else {
      console.log("Ring Ring Ring!!!");
      clearInterval(intervalId);
    }
  }, 1000);
}
