var petImage = document.getElementById('main_image');
var leftArrow = document.getElementById('left_arrow');
var rightArrow = document.getElementById('right_arrow');
var petName = document.getElementById("petName");
var petBreed = document.getElementById("petBreed");
var petLocation = document.getElementById("petLocation");
var petDescription = document.getElementById("petDescription");
var heart = document.getElementById("heart");
var petID;

var saved = [];

var apiScript = document.createElement('script');
apiScript.src = "http://api.petfinder.com/pet.getRandom?format=json&key=1b535a8e0c411309891edcc6df1aab13&output=basic&callback=loadPet";
document.getElementsByTagName('head')[0].appendChild(apiScript);

function loadPet(apiData){
  petImage.src = apiData.petfinder.pet.media.photos.photo[3].$t;
  petName.innerHTML = apiData.petfinder.pet.name.$t;
  petBreed.innerHTML = apiData.petfinder.pet.breeds.breed.$t;
  petLocation.innerHTML = apiData.petfinder.pet.contact.city.$t + ", " + apiData.petfinder.pet.contact.state.$t;
  petDescription.innerHTML = apiData.petfinder.pet.description.$t;
  petID = apiData.petfinder.pet.id.$t;
}

var indexer = 0;

heart.onclick = function(){
  saved.push(petID);;
  var saveIDs = JSON.stringify(saved);
  localStorage.setItem("petIDs", saveIDs)
}

leftArrow.onclick = function(){

};
rightArrow.onclick = function(){
  apiScript = document.createElement('script');
  apiScript.src = "http://api.petfinder.com/pet.getRandom?format=json&key=1b535a8e0c411309891edcc6df1aab13&output=basic&callback=loadPet";
  document.getElementsByTagName('head')[0].appendChild(apiScript);
};
