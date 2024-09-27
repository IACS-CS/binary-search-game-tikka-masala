true&&(function polyfill() {
    const relList = document.createElement('link').relList;
    if (relList && relList.supports && relList.supports('modulepreload')) {
        return;
    }
    for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
    }
    new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type !== 'childList') {
                continue;
            }
            for (const node of mutation.addedNodes) {
                if (node.tagName === 'LINK' && node.rel === 'modulepreload')
                    processPreload(node);
            }
        }
    }).observe(document, { childList: true, subtree: true });
    function getFetchOpts(script) {
        const fetchOpts = {};
        if (script.integrity)
            fetchOpts.integrity = script.integrity;
        if (script.referrerpolicy)
            fetchOpts.referrerPolicy = script.referrerpolicy;
        if (script.crossorigin === 'use-credentials')
            fetchOpts.credentials = 'include';
        else if (script.crossorigin === 'anonymous')
            fetchOpts.credentials = 'omit';
        else
            fetchOpts.credentials = 'same-origin';
        return fetchOpts;
    }
    function processPreload(link) {
        if (link.ep)
            // ep marker = processed
            return;
        link.ep = true;
        // prepopulate the load record
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
    }
}());

const style = '';

(function(){try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".text-interface{padding-left:1em;padding-right:1em;width:100%;height:100%;--offwhite: #aaa;--grey: #888;--black: #222;--white: #fefefe;background-color:var(--black);color:var(--white);position:sticky;top:0;max-height:90vh;overflow-y:scroll;margin-right:auto;margin-left:auto;max-width:28em;min-width:20em;font-family:Roboto,sans-serif}.text-interface h2{position:sticky;top:0;background-color:var(--black);margin:0;padding-top:1em;padding-bottom:1em;border-bottom:1px dotted var(--grey)}.text-interface .input-wrap{border:1px dotted var(--grey);padding:1em;margin-top:1em;margin-bottom:1em;opacity:.1}.text-interface .input-wrap.active{opacity:1}.text-interface .placeholder{font-style:italic;color:var(--offwhite)}.output img{margin:1em;max-width:80%;animation:fade-in .5s}@keyframes fade-in{0%{opacity:0;transform:scale(0);transform-origin:top left}to{opacity:1;transform:scale(1)}}")),document.head.appendChild(t);}}catch(e){console.error("vite-plugin-css-injected-by-js",e);}})();
const o = ["yes", "yeah", "yep", "yup", "true", "t", "y", "aye", "yup"], l = ["no", "n", "false", "f", "nope", "nah"];
class r {
  constructor(t = document.body, e = "Text Interface") {
    this.listener = null, this.outputAnimationLength = 800, this.outputDelay = 300, this.shouldStealFocus = !1, this.outputQueue = [], this.div = document.createElement("div"), this.div.classList.add("text-interface"), t.appendChild(this.div), this.div.innerHTML = `
      <h2 class="ti-title">${e}</h2>
      <div class="output">
      </div>
      <div class="input-wrap">
          <div 
             class="input" 
             contenteditable 
             placeholder="Type here...">
          </div>
          <div class="placeholder">Type and hit return...</div>
      </div>
    `, this.inputWrap = this.div.querySelector(".input-wrap"), this.inputEl = this.div.querySelector(".input"), this.outputEl = this.div.querySelector(".output"), this.placeholderEl = this.div.querySelector(
      ".placeholder"
    ), this.setupInputListener(), this.shouldStealFocus && this.inputEl.focus();
  }
  setTitle(t) {
    this.div.querySelector(".ti-title").textContent = t;
  }
  clear() {
    this.outputEl.innerHTML = "";
  }
  async readChoice(t, e = "Choose one of the following:", i = "You must choose one of the options!") {
    this.output(e);
    for (let s = 0; s < t.length; s++)
      this.output(`${s + 1}. ${t[s]}`);
    let u = await this.readText();
    if (t.indexOf(u) > -1)
      return u;
    if (u = u.replace(/\D/g, ""), u != "") {
      let s = Number(u);
      if (!isNaN(s) && s <= t.length && s > 0)
        return t[Math.floor(s) - 1];
    }
    return this.output(i), await this.readChoice(t, e, i);
  }
  async readYesOrNo(t = "Say yes or no!") {
    let e = await this.readText();
    return e = e.toLowerCase(), e = e.replace(/\s+/, ""), o.indexOf(e) > -1 ? !0 : l.indexOf(e) > -1 ? !1 : (this.output(t), await this.readYesOrNo(t));
  }
  async readNumber(t = "Please type a number") {
    let e = await this.readText(), i = Number(e);
    return isNaN(i) ? (this.output(t), this.readNumber(t)) : i;
  }
  readText() {
    return this.shouldStealFocus && this.inputEl.focus(), this.inputWrap.classList.add("active"), this.inputWrap.scrollIntoView(), new Promise((t, e) => {
      this.listener = t;
    });
  }
  showElement(t) {
    this.outputting ? this.outputQueue.push(["element", t]) : (this.outputting = !0, this.outputEl.appendChild(t), t.scrollIntoView({ behavior: "smooth" }), setTimeout(() => {
      this.outputting = !1, this.doNextOutput();
    }, this.outputDelay));
  }
  showHTML(t) {
    let e = document.createElement("div");
    e.innerHTML = t, this.showElement(e);
  }
  showImage(t, e = "An image") {
    let i = document.createElement("img");
    i.setAttribute("src", t), i.setAttribute("alt", e), this.showElement(i);
  }
  output(t, e = !1) {
    if (t = "" + t, this.outputting)
      this.outputQueue.push(["text", t, e]);
    else {
      let i = document.createElement("div");
      if (i.classList.add("output"), e && i.classList.add("echo"), !this.outputAnimationLength || e)
        i.textContent = t;
      else {
        this.outputting = !0;
        let u = this.outputAnimationLength / t.length;
        const n = () => {
          i.textContent += t[0] || "", t = t.substring(1), t.length ? setTimeout(n, u) : (this.outputting = !1, this.doNextOutput());
        };
        setTimeout(n, this.outputDelay);
      }
      this.outputEl.appendChild(i), i.scrollIntoView({ behavior: "smooth" });
    }
  }
  doNextOutput() {
    if (this.outputQueue.length) {
      let t = this.outputQueue[0];
      this.outputQueue = this.outputQueue.slice(1);
      let e = t[0], i = t.slice(1);
      e == "text" ? this.output(...i) : this.showElement(...i);
    }
  }
  setupInputListener() {
    this.inputEl.addEventListener("keypress", (t) => {
      if (t.code == "Enter") {
        let i = this.inputEl.textContent.replace(/\n$/, "");
        this.output(i, !0), this.listener && (this.listener(i), this.listener = null), this.inputWrap.classList.remove("active"), setTimeout(() => {
          this.inputEl.textContent = "";
        }, 1);
      }
    }), this.placeholderEl.addEventListener("click", () => this.inputEl.focus());
  }
}

// Get the element with id="app" to attach the TextInterface
let app = document.querySelector("#app");

// Create a new "Text Interface" instance
const ti = new r();
let playAgain = true; // Flag to control the game loop

// Start the game loop
while (playAgain) {
    await ti.output; // Await any ongoing output before proceeding
    new r(app, "What chocolate bar are you?"); // Set the context for the Text Interface
    ti.outputAnimationLength = 10; // Set animation length for output text

    // Ask for the user's name and greet them
    ti.output("What is your name, brave chocolate explorer?");
    let name = await ti.readText(); // Read the user's input for their name
    ti.output("Ah, " + name + "! The legendary chocoholic has arrived!");

    // First binary choice: Class
    let classChoice = await ti.readChoice(
        ["Math/Science", "English/History"], // Two main options
        "Choose your weapon: Math/Science or English/History? (Don’t worry, no tests here!)", // Prompt
        "Nice pick! I approve." // Confirmation message
    );

    // Handle unexpected answers for class choice
    if (classChoice !== "Math/Science" && classChoice !== "English/History") {
        ti.output("Whoa there! That's not on the menu! Did you invent a new subject?");
        classChoice = "Math/Science"; // Default to a valid choice
    }

    // Get the user's specific favorite subject from their chosen class category
    let favoriteClass = await ti.readChoice(
        classChoice === "Math/Science" ? ["Math", "Science"] : ["English", "History"], // Conditional options based on previous choice
        `Which one do you prefer? ${classChoice.split('/')[0]} or ${classChoice.split('/')[1]}? (Choose wisely!)`
    );

    // Acknowledge the user's choice
    ti.output("Oh, I totally dig " + favoriteClass + " too! Smart choice!");

    // Second binary choice: Season
    let seasonChoice = await ti.readChoice(
        ["Spring/Summer", "Fall/Winter"], // Two main options
        "Do you prefer to sweat in Spring/Summer or freeze in Fall/Winter? (Choose your climate wisely!)", // Prompt
        "Seasoned decision!" // Confirmation message
    );

    // Handle unexpected answers for season choice
    if (seasonChoice !== "Spring/Summer" && seasonChoice !== "Fall/Winter") {
        ti.output("Creating your own season? That’s next-level! But let’s stick to the basics.");
        seasonChoice = "Spring/Summer"; // Default to a valid choice
    }

    // Get the user's specific favorite season from their chosen category
    let favoriteSeason = await ti.readChoice(
        seasonChoice === "Spring/Summer" ? ["Spring", "Summer"] : ["Fall", "Winter"], // Conditional options based on previous choice
        `Which do you prefer? ${seasonChoice.split('/')[0]} or ${seasonChoice.split('/')[1]}?`
    );

    // Acknowledge the user's choice of season
    ti.output(favoriteSeason === "Fall" 
        ? "Fall is my favorite too! Nothing like crunchy leaves!" 
        : `Okay, I guess. But honestly, Fall is the ultimate season, don't you think? I like ${favoriteSeason} too.`);

    // Third binary choice: Country
    let countryChoice = await ti.readChoice(
        ["Europe", "Asia"],
        "Which epic region do you wish to conquer: Europe or Asia? (Prepare your passport!)"
    );
    
    // Get the user's specific favorite country from their chosen region
    let country; // Variable to hold the user's country choice
    if (countryChoice === "Asia") {
        country = await ti.readChoice(
            ["India", "Japan", "Singapore"],
            "Which country from Asia do you wish to visit? (Curry or sushi? Tough choice!)"
        );
        // Remove boolean outputs here
        if (country === "India") {
            ti.output("India is a beautiful country! Just watch out for the curry explosions!");
        } else if (country === "Japan") {
            ti.output("Japan is amazing! Sushi and cherry blossoms await you!");
        } else {
            ti.output("Singapore is a fantastic choice! The food scene is incredible!");
        }
    } else { // This block runs if Europe is chosen
        country = await ti.readChoice(
            ["Italy", "England", "Spain"],
            "Which country from Europe do you want to explore? (Pizza, tea, or paella?)"
        );
        // Remove boolean outputs here
        if (country === "Italy") {
            ti.output("Italy is a beautiful country! Pasta party, anyone?");
        } else if (country === "England") {
            ti.output("England is full of history and tea! Fancy a cup?");
        } else {
            ti.output("Spain is vibrant and lively! Don't forget the paella!");
        }
    }
    // Fourth binary choice: Color
    let colorChoice = await ti.readChoice(
        ["Warm Colors", "Cool Colors"], // Two main options
        "Do you prefer warm colors (like a cozy blanket) or cool colors (like a chill summer breeze)?", // Prompt
        "Great color sense!" // Confirmation message
    );

    // Handle unexpected answers for color category choice
    if (colorChoice !== "Warm Colors" && colorChoice !== "Cool Colors") {
        ti.output("Seeing colors that don’t exist? Intriguing! Let’s stick to the basics.");
        colorChoice = "Cool Colors"; // Default to a valid choice
    }

    // Get the user's specific favorite color from their chosen category
    let color = await ti.readChoice(
        colorChoice === "Warm Colors" ? ["Red", "Orange", "Yellow"] : ["Blue", "Green", "Purple"], // Conditional options based on previous choice
        `Which color from ${colorChoice} lights up your soul?`
    );

    // Determine chocolate bar based on user's favorite color
    switch (color) {
        case "Blue":
            ti.output('Congratulations! You are a Hershey bar, the classic chocolate hero!');
            ti.showImage("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/HERSHEY%27S_Chocolate_Bar_Greatest_Milk_Chocolate.jpg/200px-HERSHEY%27S_Chocolate_Bar_Greatest_Milk_Chocolate.jpg");
            break;
        case "Red":
            ti.output('You are a Kit Kat bar! Break time, anyone?');
            ti.showImage("https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/KitKat.jpg/220px-KitKat.jpg"); 
            break;
        case "Orange":
            ti.output("You are Reese's Cup! A peanut buttery delight!");
            ti.showImage("https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Reese%27s-PB-Cups-Wrapper-Small.png/240px-Reese%27s-PB-Cups-Wrapper-Small.png"); 
            break;
        case "Green":
            ti.output("You are Snickers bar! Because you’re not you when you’re hungry!");
            ti.showImage("https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Snickers-broken.png/480px-Snickers-broken.png");
            break;
        case "Purple":
            ti.output("You are Crunch! Because you like it crunchy!");
            ti.showImage("https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Nestle-crunch-small.jpg/220px-Nestle-crunch-small.jpg");
            break;
        case "Yellow":
            ti.output("You are Twix! Double the fun in every bite!");
            ti.showImage("https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Twix-Wrapper-Small.jpg/480px-Twix-Wrapper-Small.jpg");
            break;
        default:
            ti.output("I couldn't determine your chocolate bar! You must be a mystery flavor—exotic and intriguing!");
    }

    // Play again prompt with a twist
    ti.output("Would you like to embark on this chocolate quest again? (Yes or No, and no escaping to Narnia!)");
    playAgain = await ti.readYesOrNo(); // Get user's choice for playing again

    // Handle unexpected answers for play again choice
    if (playAgain !== true && playAgain !== false) {
        ti.output("Hmm, that's not a clear yes or no. I'll take that as a no. Did you drop your magic wand? Goodbye!");
        playAgain = false; // End the game loop
    }

    // If the user chooses "No", thank them for playing
    if (!playAgain) {
        await ti.output("Thank you for playing! May your chocolate cravings always be satisfied!"); // Thank the user for playing
    }
}
