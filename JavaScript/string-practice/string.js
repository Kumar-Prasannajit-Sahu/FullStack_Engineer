let naam = prompt("Enter your name: ");
console.log("Hello, " + naam + "! Welcome to the JavaScript world.");   
console.log("Your name has " + naam.length + " characters.");
console.log("Your name in uppercase: " + naam.toUpperCase()); 
let msg = ' Hello JS World ';
console.log(msg.trim()); // Remove whitespace from both sides
console.log(`your string has ${msg.trim().length} characters`); // Template literals
let msg2 = 'I love JavaScript';
msg2 = msg2.replace('love', 'enjoy'); // Replace 'love' with 'enjoy'
console.log(`${msg2} me 'python' string he kya ? : ${msg2.includes('python')}`); // Check if 'python' is in msg2
let msg3 = "This is great";
let msg4 = msg3.repeat(3); // Repeat msg3 three times
console.log(msg4.slice(5,15)); // Extract substring from index 5 to 15
// let age = prompt("Enter your age: ");
// let city = prompt("Enter your city: ");
let user = prompt("Enter your name again: ");
for (let i = 0; i<user.length; i++){
    console.log(user[i]); // Print each character of the name on a new line
    console.log(user[i].toUpperCase()); // Print each character in uppercase
}

let newSentence = "";
let sentence = "I am learning JavaScript";
for (let i = 0; i<sentence.length;i++){
    if (i === 0 || sentence[i-1] === ' '){
        newSentence += sentence[i].toUpperCase(); // Capitalize the first letter of each word
    }
    else{
        newSentence += sentence[i]; // Keep the rest of the letters as they are
    }
}

let msg5 = ' Welcome User ';
console.log(msg5.trimStart());
console.log(msg5.trimEnd()); // Remove whitespace from the start and end of the string

let fullName = "Kumar Prasannajit Sahu";
console.log(`Uppercae: ${fullName.toUpperCase()}`); // Convert to uppercase
console.log(`Lowercase: ${fullName.toLowerCase()}`); // Convert to lowercase
console.log(`includes sahu: ${fullName.includes('sahu')}`); // Check if 'sahu' is in fullName
console.log(`includes sahu: ${fullName.includes('Sahu')}`); // Check if 'Sahu' is in fullName
console.log(`first name: ${fullName.split(" ")[0]}`); // Extract first name
console.log(`Replaced to Boss: ${fullName.replace('sahu', 'Boss')}`); // Replace 'sahu' with 'Boss'