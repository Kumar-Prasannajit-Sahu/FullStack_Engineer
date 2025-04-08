let person = {
    name: "Prasannajit",
    age: 21,
    isStudent: true
};

// Accessing properties
console.log(person.name);        // Dot notation
console.log(person["age"]);      // Bracket notation

// Modifying properties
person.age = 22;
person["name"] = "Kumar Prasannajit";

console.log(person);
console.log(person.age); // 22
console.log(person.name); // Kumar Prasannajit
person.isStudent = false; // Changing boolean value
console.log(person.isStudent); // false

let car = {
    brand: "Tata",
    model: "Punch"
};
console.log(car); // { brand: 'Tata', model: 'Punch' }

// Adding a new property
car.year = 2022;
car["color"] = "Red"; // Adding color property using bracket notation
console.log(car); // { brand: 'Tata', model: 'Punch', year: 2022, color: 'Red' }
delete car.year; // Deleting the year property
console.log(car); // { brand: 'Tata', model: 'Punch', color: 'Red' }

let phone = {
    brand: "Samsung",
    model: "Galaxy S21",
    features: {
        camera: "108MP",
        battery: "4000mAh"
    }
};
console.log(phone); // { brand: 'Samsung', model: 'Galaxy S21', features: { camera: '108MP', battery: '4000mAh' } }
console.log(phone.features.camera); // 108MP
console.log(phone["features"]["battery"]); // 4000mAh
phone["color"] = "Black"; // Adding color property
console.log(phone); // { brand: 'Samsung', model: 'Galaxy S21', features: { camera: '108MP', battery: '4000mAh' }, color: 'Black' }
delete phone["features"]["battery"]; // Deleting battery property from features
console.log(phone); // { brand: 'Samsung', model: 'Galaxy S21', features: { camera: '108MP' }, color: 'Black' }

let student = {
    name: "John",
    age: 20,
    subjects: ["Math", "Science", "English"],
    grades: {
        Math: "A",
        Science: "B",
        English: "A"
    },
    isGraduated: false,
}
console.log(student); // { name: 'John', age: 20, subjects: [ 'Math', 'Science', 'English' ], grades: { Math: 'A', Science: 'B', English: 'A' }, isGraduated: false }
console.log(student["subjects"][1]); // Science
console.log(student.grades.Math); // A
console.log(student["grades"]["English"]); // A
console.log(student["grades"]["Science"]); // B
student.isGraduated = true; // Changing isGraduated property to true
console.log(student.isGraduated); // true

let books = [
    { title: "Atomic Habits", author: "James Clear" },
    { title: "Deep Work", author: "Cal Newport" },
    { title: "The Alchemist", author: "Paulo Coelho" }
];

books.forEach((book, index) => {
    console.log(`Book ${index + 1}: "${book.title}" by ${book.author}`);
});

let movies = [
    { name: "Inception", rating: 9 },
    { name: "Interstellar", rating: 8.5 },
    { name: "Tenet", rating: 7.5 }
  ];

movies.forEach((movie, index) => {
    console.log(`Movies ${index+1}: "${movie.name}" with rating ${movie.rating}`);
});
movies[1].rating = 9; // Changing rating of Interstellar to 9
movies.forEach((movie, index) => {
    console.log(`Movies ${index+1}: "${movie.name}" with rating ${movie.rating}`);
});

let topMovies = movies.filter(movie => movie.rating > 8);
console.log("Top Movies are:");
topMovies.forEach((movie, index) => {
    console.log(`🎬 Movies ${index+1}: "${movie.name}" with rating ${movie.rating}`);
});

let numbers = [10, 25, 30, 15, 5, 40];

let greaterThan20 = numbers.filter(num => num > 20);

console.log("Numbers greater than 20:", greaterThan20);


let students = [
    { name: "Ravi", marks: 85 },
    { name: "Pooja", marks: 72 },
    { name: "Aman", marks: 65 },
    { name: "Sneha", marks: 90 }
  ];
let student_with_mark_plus80 = students.filter(student => student["marks"] > 80);
console.log("Students with marks greater than 80:", student_with_mark_plus80);