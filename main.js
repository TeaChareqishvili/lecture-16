// 1 // 


function  isTrueOrFalse(x){
      if (x % 2){
        return false;
      } else {
        return true;
      }
    }


  let result =  isTrueOrFalse(10);
// console.log(result);

// 2 // 

function perimeter (a,b){
    return a*b;
}

let x = perimeter(10,5);

// console.log(x);

// 3 //

function square (a){
    return a*a;
}
 let k = square(5);
//   console.log(k);

// 4 // 


function getRandomNumber(x){
    return Math.floor( (Math.random() * x) );
  };

  let v = getRandomNumber(100);
//   console.log(v);

// 5 //

let moneySymbol = ["$", "€", "ლ"];
let moneyCode = ["USD", "EUR", "GEL"];

let g = Math.floor(  Math.random() *3 ); 
let j = Math.floor(  Math.random() *3 );

function getCurrencySymbolFromCode (j){
    if( g == j){
    return moneyCode[j] + " " + moneySymbol[g];
    } else {
        return " They dont match";
     }
}
 
let h = getCurrencySymbolFromCode(j);
// console.log(h);


// 6 // 

const persons = [
    {
        name:"Tea",
        age:33,

    },
    {
        name:"giorgi",
        age:28,
    },

    {
        name:"eka",
        age:27,
    },

    {
        name:"nino",
        age:21,
    },

    {
        name:"mari",
        age:23,
    }
]

let youngest;
function youngestPerson(){
    return youngest = Math.min(persons[0].age, persons[1].age, persons[2].age, persons[3].age, persons[4].age);
}

let finalResult = youngestPerson(persons);
// console.log(finalResult);

