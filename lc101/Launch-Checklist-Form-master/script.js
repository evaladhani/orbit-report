// Write your JavaScript code here!

window.addEventListener("load", function(){
   let json = [];
   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response){
      response.json().then( function(json){
         const div = document.getElementById("missionTarget");
         div.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[3].name}</li>
            <li>Diameter: ${json[3].diameter}</li>
            <li>Star: ${json[3].star}</li>
            <li>Distance from Earth: ${json[3].distance}</li>
            <li>Number of Moons: ${json[3].moons}</li>
         </ol>
         <img src="${json[3].image}">
         `;


      })
      })
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required!");
            event.preventDefault();

        }
        if(isNaN((fuelLevel.value) || (cargoMass.value))) {
            alert("Please enter a valid number.");
            event.preventDefault();
        }
        if(!isNaN((pilotName.value) || (copilotName.value))) {
            alert("Please enter a valid name.");
            event.preventDefault();
        }

        if ((fuelLevel.value > 10000) && (cargoMass.value < 10000)) {
           const div = document.getElementById("launchStatusCheck");
           div.innerHTML = `
           <h2 id="launchStatus" style="color: green">Shuttle ready for launch.</h2>
           <div id="faultyItems" style="visibility: visible">
           <ol id>
               <li id="pilotStatus">Pilot, ${pilotName.value}, is ready.</li>
               <li id="copilotStatus">Co-pilot, ${copilotName.value}, is ready.</li>
               <li id="fuelStatus">Fuel level is ready for launch.</li>
               <li id="cargoStatus">Cargo mass is ready for launch.</li>
            </ol>
           `
           event.preventDefault();

        } else {
         const div = document.getElementById("launchStatusCheck");
         div.innerHTML = `
         <h2 id="launchStatus" style="color: red">Shuttle not ready for launch.</h2>
         <div id="faultyItems" style="visibility: visible">
             <ol id>
                  <li id="pilotStatus">Pilot, ${pilotName.value}, is not ready.</li>
                  <li id="copilotStatus">Co-pilot, ${copilotName.value}, is not ready.</li>
                  <li id="fuelStatus">Fuel level may not be high enough for launch.</li>
                  <li id="cargoStatus">Cargo mass may be too low enough for launch.</li>
              </ol>
              `
              event.preventDefault();           
        }
    });
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
