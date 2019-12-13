import React, { Component } from 'react';

import Verson from './Person/Person';
import './App.css';


class App extends Component {

state = {

persons: [

{name: 'Max', age: '28'},
{name : "Anes", age: "23"},
{name : "Safet", age: "21"}

],

otherState: 'someValue'
}


mijenjanjeImena = () =>  {

this.setState({
  persons: [
  {name: 'Fatih', age: '28'},
  {name : "Anes", age: "23"},
  {name : "Muha", age: "23"}
  
  ]





})





//console.log('Was Clicked');

  
//<Verson  name = {this.state.persons[0].name= "Fatih"}  age = {this.state.persons[0].age = "0"}/>
//Ovo nije dobar pristup nikako. Izbacuje syntax error

//this.state.persons[0].name= "Fatih"    
//Ovo je malo logicnije ali opet nece raditi
//Izbacuje neki warning u konzoli i ne radi



}





  render(){

  return (
    <div className="App">
    


<button onClick = {this.mijenjanjeImena}>Switch Name</button>

    
    <div className="Anes">
<Verson  name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
    </div>

    <div className="Anes">
<Verson  name = {this.state.persons[1].name} age = {this.state.persons[1].age}>aaaaaaaa </Verson>
    </div>

    <div className="Anes">
<Verson  name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
    </div>

    </div>
  );
  }
}

export default App;
