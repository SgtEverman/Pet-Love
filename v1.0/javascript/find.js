// Variables to store elements that are on the 'FIND.HTML' page
var petImage = document.getElementById('main_image');
var leftArrow = document.getElementById('left_arrow');
var rightArrow = document.getElementById('right_arrow');
var petName = document.getElementById("petName");
var petBreed = document.getElementById("petBreed");
var petLocation = document.getElementById("petLocation");
var petDescription = document.getElementById("petDescription");
var heart = document.getElementById("heart");
var petID;
var indexer = 0;

// Array to store the ID numbers of the pets that were liked using the heart button
var saved = [];

// Calls the API to gather a random pets information and then return the information to the callback function named 'loadPet'
// It returns the information in a JSONP format which is loaded as a script and injected into the HTML within the head
var apiScript = document.createElement('script');
apiScript.src = "http://api.petfinder.com/pet.getRandom?format=json&key=1b535a8e0c411309891edcc6df1aab13&output=basic&callback=loadPet";
document.getElementsByTagName('head')[0].appendChild(apiScript);

// Callback function for the API, when the API finishes it calls this function and passes the information
function loadPet(apiData){
  // Loading the parsed API's information into its respected vaariables
  petImage.src = apiData.petfinder.pet.media.photos.photo[3].$t;
  petName.innerHTML = apiData.petfinder.pet.name.$t;
  petBreed.innerHTML = apiData.petfinder.pet.breeds.breed.$t;
  petLocation.innerHTML = apiData.petfinder.pet.contact.city.$t + ", " + apiData.petfinder.pet.contact.state.$t;
  petDescription.innerHTML = apiData.petfinder.pet.description.$t;
  petID = apiData.petfinder.pet.id.$t;
}
try{
  // Loads a pet ID number into the browsers if sent from the 'OWNER.JS' script and calls the API
  var pet = JSON.parse(localStorage['selected']);
  var selectScript = document.createElement('script');
  selectScript.src = "http://api.petfinder.com/pet.get?id=" + pet + "&format=json&key=1b535a8e0c411309891edcc6df1aab13&output=basic&callback=loadPet";
  document.getElementsByTagName('head')[0].appendChild(selectScript);
}catch(err){}
// this function is called when the heart is clicked on the 'FIND.HTML' page, it saves the
// pets ID number to an array and then saves it to the browsers localStorage
heart.onclick = function(){
  saved.push(petID);
  // uses JSON to turn the array into a JSON string
  var saveIDs = JSON.stringify(saved);
  localStorage.setItem("petIDs", saveIDs)
}
// unused function for when the (unused) left arrow is called
leftArrow.onclick = function(){};
// calls the API again to load a new pet using the previous function chain
rightArrow.onclick = function(){
  apiScript = document.createElement('script');
  apiScript.src = "http://api.petfinder.com/pet.getRandom?format=json&key=1b535a8e0c411309891edcc6df1aab13&output=basic&callback=loadPet";
  document.getElementsByTagName('head')[0].appendChild(apiScript);
};
