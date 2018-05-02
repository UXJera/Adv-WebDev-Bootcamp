let arr = [1,2,3,4,5,6];
// function double(input){
//   for(let i = 0; i < input.length; i++){
//     console.log(input[i]*2);
//   }
// }
// double(arr);
//
forEach(arr, (number)=>{
  console.log(number * 2);
});

var strings = ["my", "forEach", "example"];
var result = "";
forEach(strings, function(str, index, array){
  if(array.length !== -1 ){
    result += str + " ";
  } else {
    result += str + "!!!";
  }
  console.log(result);
});

// function forEach(arr, callback) {
//   for (var i = 0; i < arr.length; i++){
//     callback(arr[i], i, arr);
//   }
// }

function forEach(arr, callback) {
  for (var i = 0; i < arr.length; i++){
    callback(arr[i], i, arr);
  }
}
