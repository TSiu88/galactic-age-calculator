import {Calculator} from '../src/calculator';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('should check if valid input given and return alert if input invalid', () => {
    calculator.age = "hi";
    let valid = calculator.checkValid(calculator.age);
    expect(valid).toEqual(false);
  });

  test('should return correct age in Mercury years', () => {
    let mercuryAge = calculator.calculateForMercury(25);
    expect(mercuryAge).toEqual(104);
  });

});