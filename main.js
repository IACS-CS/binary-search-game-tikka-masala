import "./style.css";
import { TextInterface } from "text-interface";

let binary = 0;

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "What gravity falls character are you?");
ti.output("Welcome! Lets find out what gravity falls character you are!");
ti.output("Do you have a job?");
answer = await ti.readYesOrNo()
if (answer){
  ti.output("Are you tall?");
  answer = await ti.readYesOrNo()
} else if (!answer) {
  ti.output("Do you prefer to stay in the same place?");
  answer = await ti.readYesOrNo()
} else {
  ti.output("idk what to tell you, man. It broke")
}