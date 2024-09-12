import "./style.css";
import { TextInterface } from "text-interface";


let binary = 0;


// Get the element with id="app"
let app = document.querySelector("#app");

// Create a new "Text Interface"

let ti = new TextInterface(app, "What chocolate bar are you?");
ti.output("What is your name?");
let name = await ti.readText();
ti.output("Hello, " + name);
const choices = ["Math", "English", "science","History"];
  let selection = await ti.readChoice(
    choices,
    // list of choices
    "What is your favorite class?",
    // prompt (optional)
    "I like that class"
    // custom error message (optional)
  )
  const seasons = ["Spring", "Summer", "Fall", "Winter"];
  season = await ti.readChoice(
    seasons,
    // list of choices
    "What is your favorite season?",
    // prompt (optional)
    "Fall is the better season"
    // custom error message (optional)
  );
  if (selection == "Fall") {
    ti.output("Chocolate is my favorite too!");
  } else {
    ti.output(`Ok, I guess. Fall is better, but I like ${selection} too.`);
  }
//what is your fev class.(english,math,science,history)
//what is your fev season (fall.winter,spring,summer)
//What country do you want to visit(dubai,aus,japen,italy,)
//what is your fav games(uno,mon,chess,scrabble)
//what is your gaming platform(pc,ps4,xbox,switch)
//what is your fav color?(red,blue,pink,purple)