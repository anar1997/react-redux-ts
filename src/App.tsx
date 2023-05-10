import React from 'react';
import Hello from './component/Hello';


function App() {
  return (
    <div className="App">
     Hello
     <Hello name='Anar' onSmthHappen={(name)=>{console.log(name)}}/>
    </div>
  );
}

export default App;
