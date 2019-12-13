import React from 'react';

const person = (props) => {



return(

<div className = "person">

<h1>I am {props.name}</h1>

<h3>My age is: {props.age} years</h3>
<h5>{props.children}</h5>

</div>
);
}
















export default person;