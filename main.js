import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "What gravity falls character are you?");
ti.output("Welcome! Lets find out what gravity falls character you are!");
ti.output(
  await ti.readChoice(["Option 1", "Option 2"], "Which one do you prefer?")
);
