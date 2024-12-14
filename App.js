import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = (<h1>Hi Aryan</h1>);

//rendering React element inside another React
const elem = (<div>
  {heading}
  <h1>Hi Aryan</h1>
  </div>);
const root = ReactDOM.createRoot(document.getElementById("root"));
//React Functional Component----
const ReactComponent = () => {
  return (<h1 className="head"> React Functional Component</h1>);
}

//Rendering one compoent inside another ---Component composition
const Main = () => {
  return ( <div className='container'>
  <h1 className="mainhead"> Main Component</h1>
  < ReactComponent/>
  </div>);
}

//Alternate syntax for creating react components
const MainAlternate = function(){
  return ( <div className='container'>
  <h1 className="mainhead"> Main Component</h1>
  < ReactComponent/>
  </div>);
}

//writing JS inside JSX
const name ='Aryan';
const MainJSX = () => (<div className='container'>
  <h1 className="mainhead"> Main Component</h1>
  <h2>{name}</h2>
  < ReactComponent/>
  </div>)

  //rendering React component inside React element
const elem2 = (<div>
  {<MainJSX/>}
  <h1>Hi Aryan</h1>
  </div>);

  //alternate way to render React Component
  const elem3 = (<div>
    {MainJSX()}
    <h1>Hi Aryan</h1>
    </div>);

  //rendering react elemt inside React component
  const MainJSX2 = () => (<div className='container'>
    <h1 className="mainhead"> Main Component</h1>
    <h2>{elem3}</h2>
    < ReactComponent/>
    </div>)

//Rendering React component--
root.render(<MainJSX2 />);