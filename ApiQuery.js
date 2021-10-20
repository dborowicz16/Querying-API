  // Imports module to pull API
const fetch = require('cross-fetch');

  // Creates readline module to gather input
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

  // Prompts user to enter search term
function enterTerm() {
  readline.question("Enter a search term:", (searchTerm) => { fetchData(searchTerm) });
}

  // Queries API based on search term inputted
function fetchData(searchTerm) {
  console.log("Searching for " + searchTerm);
  fetch('http://universities.hipolabs.com/search?name=' + searchTerm)
  .then(res => res.json())

  .then(data => 
    {
      if(data.length == 0){
        console.log("No results");
      } else {
      for (let i = 0; i < data.length; i++) 
      if (data[i].name.includes(searchTerm) == false) {
        console.log(data[i].name)
      }
      
    }})}

   // Runs the function
enterTerm();
