import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, " Family Guy Quiz");
ti.output("Would you like to play a game?");
