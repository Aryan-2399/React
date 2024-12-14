import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
  "h1",
  { id: "heading",
   },
  "Namaste React from Aryan"
);

// JSX-  Transpiled(coverted to JS code that JS engine of browsers can understand) by parcel(Babel is used by parcel to do this transpilation) before it reaches the JS engine of browsers
//JSX =>(coverted to(by babel)---) React.createElement("h1", { id: "heading" }, "H1 from JSX") ==> HTML Element
const jsxHeading= <h1 id="headind" className="class" tabIndex="1">H1 from JSX</h1>
console.log(heading) // Object--React object----Not an HTML Element
console.log(jsxHeading)
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(jsxHeading);