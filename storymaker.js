// Constants for pre-defined arrays
const nouns = ["The turkey", "Mom", "Dad", "The Dog", "My teacher", "The elephant", "The Cat"];
const verbs = ["Sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nouns2 = ["goat", "monkey", "cow", "fish", "frog", "bug", "worm"];
const settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for selected words
let chosenNoun1 = "";
let chosenVerb = "";
let chosenAdjective = "";
let chosenNoun2 = "";
let chosenSetting = "";

// Function to select and display a random word for each category
function noun1_on_click() {
    chosenNoun1 = getRandomElementFromArray(nouns);
    document.getElementById("chosenNoun1").textContent = chosenNoun1;
}

function verb_on_click() {
    chosenVerb = getRandomElementFromArray(verbs);
    document.getElementById("chosenVerb").textContent = chosenVerb;
}

function adjective_on_click() {
    chosenAdjective = getRandomElementFromArray(adjectives);
    document.getElementById("chosenAdjective").textContent = chosenAdjective;
}

function noun2_on_click() {
    chosenNoun2 = getRandomElementFromArray(nouns2);
    document.getElementById("chosenNoun2").textContent = chosenNoun2;
}

function setting_on_click() {
    chosenSetting = getRandomElementFromArray(settings);
    document.getElementById("chosenSetting").textContent = chosenSetting;
}

// Function to generate a random story
function random_on_click() {
    const story = `Once upon a time, there was a ${chosenAdjective} ${chosenNoun1} who ${chosenVerb} a ${chosenAdjective} ${chosenNoun2} in a ${chosenSetting}.`;
    document.getElementById("story").textContent = story;
}

// Function to add student info
function addStudentInfo() {
    const studentId = "YourStudentID"; // Replace with your actual student ID
    document.getElementById("studentId").textContent = `Student ID: ${studentId}`;
}

// Utility function to get a random element from an array
function getRandomElementFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Add student info on page load
addStudentInfo();

// Add event listeners to the buttons
document.getElementById("noun1").addEventListener("click", noun1_on_click);
document.getElementById("verb").addEventListener("click", verb_on_click);
document.getElementById("adjective").addEventListener("click", adjective_on_click);
document.getElementById("noun2").addEventListener("click", noun2_on_click);
document.getElementById("setting").addEventListener("click", setting_on_click);
document.getElementById("random").addEventListener("click", random_on_click);
