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


