// an array to store the petIDs that it retrieves from the browsers local storage
var petIDs = JSON.parse(localStorage['petIDs']);

// loops through the petIDs and calls the Petfinder's API using them
var arrayLength = petIDs.length;
for (var i = 0; i < arrayLength; i++) {
  var apiScript = document.createElement('script');
  apiScript.src = "http://api.petfinder.com/pet.get?format=json&key=1b535a8e0c411309891edcc6df1aab13&output=basic&callback=addPet&id=" + petIDs[i];
  document.getElementsByTagName('head')[0].appendChild(apiScript);
}

// call back function that the API calls
// this function creates an image element with the pets information
// then it puts an onclick listener on it that links to find.html
// then it injects the image into owner.html's content div
function addPet(data){
  var img = document.createElement("img");
  img.src = data.petfinder.pet.media.photos.photo[3].$t;
  img.classList.add("pets_icon");
  img.onclick = function(){
    var selectedPet = JSON.stringify(data.petfinder.pet.id.$t);
    localStorage.setItem("selected", selectedPet)
    window.location.href = "find.html";
  };
  var src = document.getElementById("content3");
  src.appendChild(img);
}
