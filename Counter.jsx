import { useState } from './react';

function Counter() {
    const {Count,setCount} = (0);

    return(
        <div>
            <h2>Counter Application</h2>
         <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
        
        <button onClick={() => setCount(count - 1)}>
        Decrement 
      </button>

        <button onClick={() => setCount(0)}>
        Reset
      </button>
        </div>
  
       );
    }
    export default Counter
    
    
