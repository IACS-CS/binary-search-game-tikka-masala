import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, " Family Guy Quiz");
ti.output("I'll try to guess which family guy character you are");
//if you type ryan, tedddy or aditiya automatically do "Greased up deaf guy and end game"
//are you male or female 
//are you an animal
//are part of a large family?
//do you get picked on a lot?
//
//If you choose yes for male or female try to figure out a way to store the data while asking the other questions
//Avalable answers Peter Brian Stewie Joe Quagmire Cleaveland Chris Adam west, Ladies Lois Ellie(dog) Meg Bonnie Trica Donna Babs 