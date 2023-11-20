//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//-> initial
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(evenOrOdd(4));
console.log(evenOrOdd(11));



//-> refactured
const evenOrOdds = (number) => {
  return number % 2 === 0 ? "Even" : "Odd";
};

console.log(evenOrOdds(5));
console.log(evenOrOdds(10));
