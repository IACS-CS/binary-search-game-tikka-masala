import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "What chocolate bar are you?");
ti.output("What is your name?");
let name = await ti.readText();
ti.output("Hello, " + name);

//what is your fev class.(english,math,science,history)
//what is your fec season (fall.winter,spring,summer)
//What country do you want to visit(dubai,aus,japen,italy,)
//what is your fav games(uno,mon,chess,scrabble)
//what is your gaming platform(pc,ps4,xbox,switch)
//what is your fav color?(red,blue,pink,purple)