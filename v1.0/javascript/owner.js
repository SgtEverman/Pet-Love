var petIDs = JSON.parse(localStorage['petIDs']);

var arrayLength = petIDs.length;
for (var i = 0; i < arrayLength; i++) {
  var apiScript = document.createElement('script');
  apiScript.src = "http://api.petfinder.com/pet.get?format=json&key=1b535a8e0c411309891edcc6df1aab13&output=basic&callback=addPet&id=" + petIDs[i];
  document.getElementsByTagName('head')[0].appendChild(apiScript);
}

function addPet(data){
  var img = document.createElement("img");
  img.src = data.petfinder.pet.media.photos.photo[3].$t;;
  img.classList.add("pets_icon");

  var src = document.getElementById("content3");
  src.appendChild(img);
}
