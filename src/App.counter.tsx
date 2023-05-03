import React, { useReducer } from 'react';

import './App.scss';


const initialState = {count: 0 , op : 'increment'};

  function reducer(state:{count:number}, action:{type:string}) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1, op:'increment'};
      case 'decrement':
        return {count: state.count - 1, op: 'decrement'};
      default:
        throw new Error();
    }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  
  return(
          <div className='width100'>
             <span> test health app </span>
             <>
                 Count: {state.count}
                 <br/>
                 <br/>
                 <button onClick={() => dispatch({type: 'decrement'})}>-</button>
                 <br/>
                 <br/>
                 <button onClick={() => dispatch({type: 'increment'})}>+</button>
             </>
          </div>
  )
}

export default App;
