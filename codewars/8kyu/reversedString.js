



// Complete the solution so that it reverses the string passed into it.
/*
 //1-> first convert string into an array by using the split method which converts the word into array of split words.['h','e','y']
 //2->-reverse() is an array method , hence the conversion */




 
function solution(str) {
  return str.split("").reverse("").join("");
}
