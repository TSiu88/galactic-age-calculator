const mercuryAdjustment = .24;
const venusAdjustment = .62;
const marsAdjustment = 1.88;
const jupiterAdjustment = 11.86;

export class Calculator{
  constructor(age){
    this.age = age;
    this.lifeExpectancy = 78;
  }

  checkValid(num){
    if (Number.isInteger(num) && num > 0){
      return true;
    } else{
      return false;
    }
  }

  mercuryCalculation(){
    return Math.floor(this.age/mercuryAdjustment);
  }

  venusCalculation(){
    return Math.floor(this.age/venusAdjustment);
  }

  marsCalculation(){
    return Math.floor(this.age/marsAdjustment);
  }

  jupiterCalculation(){
    return Math.floor(this.age/jupiterAdjustment);
  }


}