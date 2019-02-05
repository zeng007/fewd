
// define a helper print function so we can see it on the page
let count = 0;
function print(message){
  console.log(`${count}: ${message}`);
  $('#result').append(`<p>${message}</p>`);
  count = count += 1;
}
function shouldPrint(message){
  console.log(`${count}: ${message}`);
  $('#should').append(`<p>${message}</p>`);
  count = count += 1;
}
function start(message){
  count = 0;
  $('#result').html('');
  $('#should').html('');
  print(`<h3>${message}</h3>`);
  shouldPrint(`<h3>should be:</h3>`);
}
