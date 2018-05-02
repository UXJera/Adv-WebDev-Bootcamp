let arr = [1,2,3,4,5,6];

findIndex(arr, function(num, index, array){
  console.log(num === 4);
});

function findIndex(arr, callback) {
  for (var i = 0; i < arr.length; i++){
    callback(arr[i], i, arr);
  }
}
