import {Calculator} from '../src/calculator';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator(30);
  });

  test('should check if Calculator created correctly with inputted values or default', () => {
    expect(calculator.age).toEqual(30);
    expect(calculator.lifeExpectancy).toEqual(78);
  });

  test('should check if valid input of positive integer given and return alert if input invalid', () => {
    calculator.age = "hi";
    let valid = calculator.checkValid(calculator.age);
    expect(valid).toEqual(false);
  });

  test('should return correct age in Mercury years', () => {
    calculator.age = 25;
    let mercuryAge = calculator.mercuryCalculation();
    expect(mercuryAge).toEqual(104);
    // let planet = "mercury";
    // expect(calculator.calculateAge(planet)).toEqual(104);
  });

  test('should return correct age in Venus years', () => {
    calculator.age = 25;
    let venusAge = calculator.venusCalculation();
    expect(venusAge).toEqual(40);
  });

  test('should return correct age in Mars years', () => {
    calculator.age = 25;
    let marsAge = calculator.marsCalculation();
    expect(marsAge).toEqual(13);
  });

  test('should return correct age in Jupiter years', () => {
    calculator.age = 25;
    let jupiterAge = calculator.jupiterCalculation();
    expect(jupiterAge).toEqual(2);
  });

  test('should give difference between age and life expectancy', () => {
    calculator.lifeExpectancy = 82;
    expect(calculator.expectedYears()).toEqual(52);
  });

  test('should return true (years left) or false (years past) depending on if the difference between age and life expectancy is positive or negative', () => {
    calculator.age = 94;
    calculator.lifeExpectancy = 82;
    let yearsLeft = calculator.hasYearsLeft(calculator.expectedYears());
    expect(yearsLeft).toEqual(false);
  });

});