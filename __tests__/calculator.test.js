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

});