//progression1

const foods = [pizza, burger, fingerChips, donuts, springRoll];
const modifiedFood=foods.slice(1,4);
console.log(modifiedFood)
//progression2

const foods = [pizza, burger, fingerShips, donuts, springRoll];
const modifiedFood=foods.splice(2,0,noodles, icecream);
console.log(modifiedFood)
//progression3

const numberArray = [12,324,213,4,2,3,45,4234];

const evenNum=numberArray.filter(function (isEven){
    if (isEven % 2 === 0 || isEven === 0) {
        return isEven;
    }
})
console.log(evenNum)
const numberArray = [12,324,213,4,2,3,45,4234];
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};
const myPrimeArray = numberArray.filter(isPrime);
console.log(myPrimeArray);

//progression4
const numberArray = [12,324,213,4,2,3,45,4234];
var num=Promise.reject(nonPrime=>{for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;)
console.log(num);
//progression5

const numberArray = [12,324,213,4,2,3,45,4234];

const evenNum=numberArray.filter(isEven=>{
    if (isEven % 2 === 0 || isEven === 0) {
        return isEven;
    }
})
//progression6
const myArray = [11, 34, 20, 5, 53, 16];
const squareNum=myArray.map(findSquareOfNumbers =>findSquareOfNumbers**2);
console.log(squareNum);
       
//progression7

const myArray=[2, 3, 5, 10];
const multiplyNum=myArray.map(multiply=>multiply*multiply);
console.log(multiplyNum);
const multiplyByReduce=myArray.reduce((total,num) => total * num);
console.log(multiplyByReduce)

