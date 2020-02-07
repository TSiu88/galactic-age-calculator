import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Calculator } from './calculator';

$(document).ready(function(){
  let calculator = new Calculator(1);

  $("#calculateButton").click(function(event){
    event.preventDefault();

    console.log(calculator.calculateAge("mercury"));
  });

});

