import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Calculator } from './calculator';

function displayUpdate(calc){
  $("#planetAges").empty();
  for(let i=0; i<calc.outputAges.length; i++){
    let planetName = calc.planets[i];
    $("#planetAges").append(createPlanetOutput(planetName));
    $(eval(`"#${planetName}"`)).append(`<h5 class="planetName">Planet: ${planetName}</h5>`);
    $(eval(`"#${planetName}"`)).append(`<p>Age on planet: ${calc.outputAges[i]} years</p>`);
  }
}

function createPlanetOutput(name){
  let newDiv = document.createElement('div');
  newDiv.id = name;
  newDiv.className = "planet";
  return newDiv;
}

function displayLifeExpectancy(calc){
  let yearsLeft = calc.expectedYears();
  let hasLeft = calc.hasYearsLeft(yearsLeft);
  $("#expectedLife").text(calc.lifeExpectancy);
  $("#lifeYears").text(Math.abs(yearsLeft));

  if (hasLeft){
    $("#haveOrAre").text("have");
    $("#leftOrPast").text("left till");
  } else{
    $("#haveOrAre").text("are");
    $("#leftOrPast").text(" years past");
  }
}

$(document).ready(function(){
  let calculator = new Calculator();

  $("#calculateButton").click(function(event){
    event.preventDefault();
    $("#outputField").show();

    let years = document.getElementById("age").value;
    let hasExpectancy = document.querySelector("#expectedYears").value;

    if(calculator.checkValid(years)){
      calculator.age = years;
      calculator.outputAges = [];
      calculator.outputAges[0] = years;
    } else{
      alert("Please enter a vaild positive whole number for age.");
    }
    
    if(hasExpectancy != ""){
      if(calculator.checkValid(hasExpectancy) === true){
        calculator.lifeExpectancy = hasExpectancy;
      } else{
        alert("Please enter a vaild positive whole number for life expectancy.");
      }
    }

    calculator.calculateAgeOutput();
    
    displayUpdate(calculator);
    displayLifeExpectancy(calculator);

  }); //End of CalculateButton

});

