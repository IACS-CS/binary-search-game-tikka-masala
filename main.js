import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Example Text Interface");
ti.output("Hello, think of an NFL Team and I will try to guess it.");
ti.output("Is your team in the AFC?");
let userAnswer = ti.readYesOrNo();
if(userAnswer)
{

} else {
  
}

