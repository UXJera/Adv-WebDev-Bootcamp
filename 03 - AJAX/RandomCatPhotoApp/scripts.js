//////////////////////////////////
// API DOCUMENTATION
// https://random.cat/help.html
//////////////////////////////////

const url = 'http://aws.random.cat/meow';

function generateNextCat() {
  $.getJSON(url)
  .done((data)=>{
    let catUrl = data.file;
    $('#catPhoto').attr('src', catUrl);
  })
  .fail(()=>{
    console.log("There was an error")
  })
}
