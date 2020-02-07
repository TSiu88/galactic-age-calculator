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
    return Math.floor(this.age/.24);
  }

}