export class Calculator{
  constructor(){
    this.age = 1;
  }

  checkValid(num){
    if (Number.isInteger(num) && num > 0){
      return true;
    } else{
      return false;
    }
  }

}