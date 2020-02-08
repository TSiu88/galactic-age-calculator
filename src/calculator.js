const mercuryAdjustment = .24;
const venusAdjustment = .62;
const marsAdjustment = 1.88;
const jupiterAdjustment = 11.86;

export class Calculator{
  constructor(){
    this.age = 1;
    this.lifeExpectancy = 78;
    this.planets = ["earth", "mercury", "venus", "mars", "jupiter"];
    mercuryAdjustment;
    venusAdjustment;
    marsAdjustment;
    jupiterAdjustment;
    this.outputAges = [];
  }

  checkValid(num){
    num = parseFloat(num);
    if (Number.isInteger(num) && num > 0){
      return true;
    } else{
      return false;
    }
  }

  calculateAgeOutput(){
    this.outputAges[0] = parseInt(this.age);
    for (let i=1; i<this.planets.length; i++){
      this.outputAges.push(this.calculateAge(this.planets[i]));
    }
  }

  calculateAge(planet){
    let adjustment = eval(`${planet}Adjustment`);
    return Math.floor(this.age/adjustment);
  }

  expectedYears(){
    return this.lifeExpectancy - this.age;
  }

  hasYearsLeft(years){
    if (years > 0){
      return true;
    } else {
      return false;
    }
  }
}