import "./style.css";
import { TextInterface } from "text-interface";


let binary = 0;

// Get the element with id="app"
let app = document.querySelector("#app");

// Create a new "Text Interface"
const ti = new TextInterface();
let playAgain = true;
while (playAgain) {
await ti.output ; new TextInterface(app, "What chocolate bar are you?");
ti.outputAnimationLength = 10;
ti.output("What is your name?");
let name = await ti.readText();
ti.output("Hello, " + name);
const choices = ["Math", "English", "Science","History"];
  let selection = await ti.readChoice(
    choices,
    // list of choices
    "What is your favorite class?",
    // prompt (optional)
    "I like that class"
    // custom error message (optional)
  )
  const seasons = ["Spring", "Summer", "Fall", "Winter"];
  let season = await ti.readChoice(
    seasons,
    // list of choices
    "What is your favorite season?",
    // prompt (optional)
    "Pick a real answer!"
    // custom error message (optional)
  );
  if (season == "Fall") {
    ti.output("Fall is my favorite too!");
  } else {
    ti.output(`Ok, I guess. Fall is better, but I like ${season} too.`);
  }
  
  const countries = ["Dubai", "Australia", "Japan", "Italy"];
  let country = await ti.readChoice(
    countries,
    // list of choices
    "What country do you want to visit?",
    // prompt (optional)
    "Pick a real answer!"
    // custom error message (optional)
  );
  if (country == "Italy") {
    ti.output("Italy is a beautiful country!");
  } else {
    ti.output(`Ok, I guess. Italy is cooler, but I like ${country} too.`);
  }
  const colors = ["Blue", "Red", "Orange", "Green", "Purple", "Yellow"];
  let color = await ti.readChoice(
    colors,
    // list of choices
    "What's Your Favorite Color?",
    // prompt (optional)
    "Pick a real answer!"
    // custom error message (optional)
  );
  if (color == "Blue") {
    ti.output("You are Hershey's Bar");
  } else if (color == "Red") {
    ti.output( "You are Kit-Kat Bar")
  } else if (color == "Orange") {
    ti.output ("You are Reese's")
  } else if (color == "Green") {
    ti.output("You are Snickers")
  } else if (color == "Purple") {
    ti.output("You are Crunch")
    }
    else if (color == "Yellow"){
        ti.output("You are Twix")
      }
    
        ti.output("Would you like to play again? (Yes or No)");
      playAgain = await ti.readYesOrNo();
}
//what is your fav class(english,math,science,history)
//what is your fav season(summer,fall,spring,winter)
//what is your fav place to vist(,Dubai,Australia, Japan, Italy)
//what is your fav color(Blue", "Red", "Orange", "Green", "Purple", "Yellow")