import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
let ti = new TextInterface(app, "Which soccer player are you?");
ti.output("Hello and welcomeeee to Which soccer play are you.");
ti.output("My name is Bob I'll be your host I hope your ready");
let userName = await ti.readText();
ti.output("It is lovely to meet you, " + userName);
ti.output("whats your favorite number?");
await ti.readText();