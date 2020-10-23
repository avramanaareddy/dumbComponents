import React from "react";
import "./styles.css";
 
export default function App() {
  const usersList= [
    {
      "name":'ramana',
      "job":'software'
    },
    {
      "name":'rudra',
      "job":'chairman'
    },
    {
      "name":'lalitha',
      "job":'president'
    },
    {
      "name":'vanaja',
      "job":'organizer'
    }];
  console.log(this.usersList)
  return (
    <div className="App">
      <nav>
      <h1>Users Data</h1>
      <ul style={{listStyle:'none'}}>
     
     {usersList.map((user)=> {
     return( <div>
        <li><h2>Name: {user.name}</h2></li>

        <li>Designation: {user.job}</li>
        <span>==============================</span>
        </div>)}
     )}

     </ul>
        </nav>
     

    </div>
 
 )
}
