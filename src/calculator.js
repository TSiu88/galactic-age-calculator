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
  }

  checkValid(num){
    num = parseFloat(num);
    if (Number.isInteger(num) && num > 0){
      return true;
    } else{
      return false;
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