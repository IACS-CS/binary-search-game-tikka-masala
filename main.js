import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Which soccer player are you?");
ti.output("What is your name?");
let name = await ti.readText();
ti.output("Hello, " + name);
