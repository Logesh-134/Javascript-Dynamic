const app = document.getElementById("app");

function Element(tag, text, className) {
  const ele = document.createElement(tag);

  if (text) {                 
    ele.textContent = text;
  }

  if (className) {
    ele.className = className;
  }
  return ele;
}

const section = Element("section","","container");
document.body.insertBefore(section,app);

const heading = Element("h1","JavaScript-Tutorial","title");

const para = Element("p","JavaScript (JS) is a high-level programming language that is a core technology of the World Wide Web, used by 98.9% of websites for client-side behavior. It is used to make websites interactive and dynamic.","");

const button = Element("button","Start learning Javascript now >","btn");
button.addEventListener("click", function(){
    alert("Welcome to JavaScript World")
});

section.appendChild(app);
app.append(heading,para,button);

// without function
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
