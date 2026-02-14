
//1) Create a string array with 5 favorite movies.
var favMovies1 = ["Inception", "The Matrix", "Interstellar", "Django", "Spirited Away"];
console.log(favMovies1[1]); // second movie

//2) Function constructor method with length 5.
var movies = new Array(5);
movies[0] = "Inception";
movies[1] = "The Matrix";
movies[2] = "Interstellar";
movies[3] = "Django";
movies[4] = "Spirited Away";

console.log(movies[0]); // first movie

 //3) Add a new movie into the 3rd position.
var moviesStep3 = new Array(5);
moviesStep3[0] = "Inception";
moviesStep3[1] = "The Matrix";
moviesStep3[2] = "Interstellar";
moviesStep3[3] = "Django";
moviesStep3[4] = "Spirited Away";

// insert at 3rd position (index 2)
moviesStep3.splice(2, 0, "The Dark Knight");
console.log(moviesStep3.length);


//4) Literal notation, 5 movies.

var moviesStep4 = ["Inception", "The Matrix", "Interstellar", "Django", "Spirited Away"];
delete moviesStep4[0]; 
console.log(moviesStep4); 


//5) Literal notation, 7 movies.

var moviesStep5 = [
  "Inception",
  "The Matrix",
  "Interstellar",
  "Django",
  "Spirited Away",
  "The Dark Knight",
  "Parasite"
];

for (var index in moviesStep5) {
  console.log(moviesStep5[index]);
}


// 6)Use for/of to display each movie.

for (var movie of moviesStep5) {
  console.log(movie);
}



//7) Using for/of, display in sorted view.
 
var sortedMovies = moviesStep5.slice().sort();
for (var movie of sortedMovies) {
  console.log(movie);
}


//8) Create leastFavMovies (3 regrets).
var leastFavMovies = ["Movie 43", "Cats", "The Room"];

console.log("Movies I like:\n");
for (var movie of moviesStep5) {
  console.log(movie);
}

console.log("\nMovies I regret watching:\n");
for (var movie of leastFavMovies) {
  console.log(movie);
}


//9) Merge arrays into single array called movies.

var moviesMerged = moviesStep5.concat(leastFavMovies);
moviesMerged.sort().reverse();

for (var movie of moviesMerged) {
  console.log(movie);
}


//10) Return just the last item in the array and display it.

var lastItem = moviesMerged[moviesMerged.length - 1];
console.log(lastItem);


//11) Return just the first item in the array and display it.

var firstItem = moviesMerged[0];
console.log(firstItem);


//12) Programmatically retrieve movies you do not like and return indices.

var moviesStep12 = moviesStep5.concat(leastFavMovies);

var regretIndices = [];
for (var i = 0; i < moviesStep12.length; i++) {
  if (leastFavMovies.indexOf(moviesStep12[i]) !== -1) {
    regretIndices.push(i);
  }
}
console.log(regretIndices);

var replacements = ["Whiplash", "Arrival", "Up"];
for (var r = 0; r < regretIndices.length; r++) {
  moviesStep12[regretIndices[r]] = replacements[r];
}
console.log(moviesStep12);


//13) Multi-dimensional array with rankings

var rankedMovies = [
  ["Inception", 1],
  ["The Matrix", 2],
  ["Interstellar", 3],
  ["Django", 4],
  ["Spirited Away", 5]
];

var movieNamesOnly = rankedMovies
  .flat()
  .filter(function (item) {
    return typeof item === "string";
  });

for (var name of movieNamesOnly) {
  console.log(name);
}


//14) Employees array + anonymous function

var employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];

var showEmployee = function (arr) {
  console.log("Employees:\n");
  for (var emp of arr) {
    console.log(emp.toUpperCase());
  }
};

showEmployee(employees);


//15) Filter false, null, 0 and blank values from an array.

function filterValues(arr) {
  return arr.filter(function (value) {
    return value !== false && value !== null && value !== 0 && value !== "";
  });
}

console.log(filterValues([58, "", "abcd", true, null, false, 0]));


//16) Get a random item from an array.

function getRandomItem(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

var nums = [1,2,3,4,5,6,7,8,9,10];
console.log(getRandomItem(nums));


//17) Get the largest number from a numeric array.

function getLargestNumber(arr) {
  return Math.max(...arr);
}


console.log(getLargestNumber([10, 55, 3, 99, 42]));

