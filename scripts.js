// JavaScript for TP7

// function to load a file from the URL "fromFile" into the object identified by "whereTo'
function loadFileInto(fromFile, whereTo) {

  // creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();

  // defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // provides code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {
    if ((this.readyState == 4) && (this.status == 200)) {
      document.querySelector(whereTo).innerHTML = this.responseText;

    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);
    }

  } // end ajax.onreadystatechange function

  // initiate request and wait for response
  ajax.send();

}



// new Recipe object
function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equipmentURL, directionsURL) {
  
  this.recipeName = recipeName; 
  this.contributor = contributorName;
  this.imageURL = imageURL;
  this.ingredients = ingredientsURL;
  this.equipment = equipmentURL;
  this.directions = directionsURL;
  
  this.displayRecipe = function() {
    
    document.querySelector("#titleBanner h1").innerHTML = this.recipeName;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.querySelector("#titleBanner").style.backgroundImage = "url(" + this.imageURL + ")";
    loadFileInto(this.ingredients, "#ingredients ul");
    loadFileInto(this.equipment, "#equipment ul");
    loadFileInto(this.directions, "#directions ol");
  
  
  }
  

}

PeachCrisps = new Recipe(
  "Peach Crisps", 
  "Zaire", 
  "https://images.unsplash.com/photo-1639588473831-dd9d014646ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", 
  "ingredients.html", 
  "equipment.html", 
  "directions.html"
);

TwistyCookies = new Recipe(
  "Twisty Cookies", 
  "Mark Filip", 
  "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80", 
  "twistycookies-ingredients.html", 
  "twistycookies-equipment.html", 
  "twistycookies-directions.html"
);

FrenchToast = new Recipe(
  "French Toast", 
  "Andrew Witsoe", 
  "https://andrewwitsoe.reclaim.hosting/tp4/frenchtoast.jpg", 
  "frenchtoast-ingredients.html", 
  "frenchtoast-equipment.html", 
  "frenchtoast-directions.html"
);


window.onload = function() {

  document.querySelector("#firstRecipe").onclick = function() {
    PeachCrisps.displayRecipe();
  }
  
  document.querySelector("#secondRecipe").onclick = function() {
    TwistyCookies.displayRecipe();
    
  document.querySelector("#thirdRecipe").onclick = function() {
    FrenchToast.displayRecipe();
  }
   
  }
  
  
  


} // end window.onload