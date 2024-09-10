import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Guess The Hogwarts House");
ti.output("What is your name?");
let name = await ti.readText();
ti.output("Hello, " + name);

