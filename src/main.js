import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Calculator } from './calculator';

$(document).ready(function(){
  let calculator = new Calculator();

  $("#calculateButton").click(function(event){
    event.preventDefault();

    let years = document.getElementById("age").value;
    let hasExpectancy = document.querySelector("#expectedYears").value;

    if(calculator.checkValid(years)){
      calculator.age = years;
      //calculator.planets.earth = years;
      console.log(calculator.planets);

    } else{
      alert("Please enter a vaild positive whole number for age.");
    }
    
    if(hasExpectancy != ""){
      if(calculator.checkValid(hasExpectancy) === true){
        calculator.expectedYears = hasExpectancy;
      } else{
        alert("Please enter a vaild positive whole number for life expectancy.");
      }
    }
    console.log(calculator.calculateAgeOutput());

  }); //End of CalculateButton

});

