// const heading = React.createElement(
//   "h1",
//   { id: "heading",
//     abc:"aryan"
//    },
//   "Namaste React from Aryan"
// );

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I am H1 tag"), React.createElement("h2", {}, "I am H2 tag")]  //Child--(siblings--(on the same level))
  )    //Child
);

console.log(parent) // Object--React object----Not an HTML Element
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent); //Object--React object -"parent" ---converted to html tag by render() method