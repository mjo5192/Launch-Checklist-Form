// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response){
         response.json().then( function(json) {
            const div = document.getElementById("missionTarget");
            div.innerHTML = `
            <ol>
               <li>Name: ${json.name}</li>
               <li>Diameter: ${json.diameter}</li>
               <li>Star: ${json.star}</li>
               <li>Distance from Earth: ${json.distance}</li>
               <li>Number of Moons: ${json.moons}</li>
            </ol>
            <img src="${json.image}">
            `;
         });
      });
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel");
      let cargoMass = document.querySelector("input[name=cargoMass");
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      }
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      pilotStatus.value = `"Pilot " + ${pilotName} + " is ready for launch"`;
      copilotStatus.value = `"Co-pilot " + ${copilotName} + " is ready for launch"`;

      if (fuelLevel < 10000){
         document.getElementById("fuelStatus").style.visibility = "visible";
         fuelStatus.value = "Fuel level too low for launch";
      }
      if (cargoMass > 10000){
         document.getElementById("faultyItems").style.visibility = "visible";
         cargoMass.value = "Cargo mass too high"
      }
      if(fuelLevel < 10000 ||cargoMass > 10000){
         document.getElementById("launchStatus").style.visibility = "visible";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").value = "Shuttle Not Ready For Launch";
      }
      document.getElementById("launchStatus").style.color = "green";
      document.getElementById("launchStatus").value = "Shuttle Is Ready For Launch";
   });
});
 /* block of code shows how to format the HTML once you fetch some planetary JSON!
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
