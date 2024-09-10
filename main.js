import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "king allan's Guess The Sport");
ti.output("What is your name?");
let name = await ti.readText();
ti.output("Hello, " + name);

