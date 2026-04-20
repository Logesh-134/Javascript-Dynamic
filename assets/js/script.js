const app = document.getElementById("app");

// Data Array
const data = [
  {
    title: "Javascript Introduction",
    description: "JavaScript (JS) is a high-level programming language that is a core technology of the World Wide Web.",
    button: "Learn more"
  },
  {
    title: "Javascript Arrays",
    description: "An Array is an object type designed for storing data collections.",
    button: "Learn more"
  },
  {
    title: "JavaScript Loops",
    description: "Loops can execute a block of code a number of times.",
    button: "Learn more"
  },
  {
    title: "Javascript Functions",
    description: "Functions are reusable code blocks designed for particular tasks",
    button: "Learn more"
  },
  
  {
    title: "JavaScript Object",
    description: "A JavaScript object is a collection of key value pairs used to store related data.",
    button: "Learn more"
  },
  {
    title: "Javascript Modal",
    description: "Modal is a popup window that appears on top of a webpage to show important content (like forms, alerts, login screens) without leaving the current page.",
    button: "Learn more"
  }
];

// reusable Element Function
function Element(tag,text,className){
    const ele = document.createElement(tag);
    if (text){
        ele.textContent = text;
    }
    if (className){
        ele.className = className;
    }
    return ele;
}

// Card Component
function createCard(item){
const card = Element("div","","card");

const title = Element("h1", item.title);
const desc = Element("p", item.description);
const btn= Element("button", item.button);

btn.addEventListener("click", function() {
  openModal(item);
});

card.append(title,desc,btn);
return card;
}


//Modal Pop-up
function openModal(item){
const overlay = Element("div","","modal-overlay");
const modal = Element("div","","modal") 

const title = Element("h1", item.title);
const desc = Element("p", item.description);
const closeBtn = Element("button", "close", "close-btn");

closeBtn.addEventListener("click", function(){
    overlay.remove();
});

overlay.addEventListener("click", function(e){
    if(e.target === overlay);
    overlay.remove()
});    

modal.append(title,desc,closeBtn);
overlay.appendChild(modal);
document.body.appendChild(overlay);
}


//Header and Section Wrapper
function createSection() {
  const header = Element("h1", "JS-Tutorial", "header");
  const section = Element("section", "", "section");
  const container = Element("div", "", "card-container");

   //Loop Rendering
   data.forEach(item => {
   const card = createCard(item);
   container.appendChild(card);
   });
 
  section.appendChild(container);
  return {header,section};
}

// render
const { header, section } = createSection();

app.appendChild(header);
app.appendChild(section);           













// with function (17-04-2026)
// const app = document.getElementById("app");

// function Element(tag, text, className) {
//   const ele = document.createElement(tag);

//   if (text) {                 
//     ele.textContent = text;
//   }

//   if (className) {
//     ele.className = className;
//   }
//   return ele;
// }

// const section = Element("section","","container");
// document.body.insertBefore(section,app);

// const heading = Element("h1","JavaScript-Tutorial","title");

// const para = Element("p","JavaScript (JS) is a high-level programming language that is a core technology of the World Wide Web, used by 98.9% of websites for client-side behavior. It is used to make websites interactive and dynamic.","");

// const button = Element("button","Start learning Javascript now >","btn");
// button.addEventListener("click", function(){
//     alert("Welcome to JavaScript World")               
// });

// section.appendChild(app);
// app.append(heading,para,button);



// without function (17-04-2026)
// const app = document.getElementById("app");

// const section = document.createElement("section");
// section.textContent = "";
// section.className = "container";

// document.body.insertBefore(section,app);

// const heading = document.createElement("h1");
// heading.textContent = "Welcome to my friends";
// heading.className = "title";

// const para = document.createElement("p");
// para.textContent = "We are Discuss about Javascript";
// para.className = "desc";

// const button = document.createElement("button");
// button.textContent = "More";
// button.className = "btn";

// button.addEventListener("click", function(){
//     alert("Are you ready");
// })

// section.appendChild(app);

// app.appendChild(heading);
// app.appendChild(para);
// app.appendChild(button);
