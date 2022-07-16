import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";


function createEntry(oneEntry){
  return(
    <Entry 
    key = {oneEntry.id}
    emoji={oneEntry.emoji}
    name={oneEntry.name}
    description = {oneEntry.description}
    
    />
  );
}





function App() {
  return (
    <div>
    <h1>
      <span>emojipedia</span>
    </h1>
   {emojipedia.map(createEntry)}
    </div>
  );
}

export default App;
