import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Guess Your Hogwarts House");
ti.output("Are you brave?");
let name = await ti.readText();
ti.output("Hello, " + name);

