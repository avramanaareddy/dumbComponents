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
  console.log(usersList)
  return (
    <div className="App">
      <nav>
      <h1>Users Data</h1>
        <ul style={{listStyle:'none'}}>
     
        {usersList.map((user)=> {
        return( <div>
           <li>{user.name}</li>
           <li>{user.job}</li>
           </div>)}
        )}

        </ul>
        </nav>
     

    </div>
 
 )
}
