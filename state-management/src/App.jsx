import {useState} from 'react';
import ('./App.css')

function App() {
  const [count, setCount] = useState(0);
  const count_state = (value) => {
    // if(count === 10 || count === -1){
    //   setCount(0);
    //   return;
    // }else{
    //   setCount(count + value);
    // };

    setCount((prev) => {
      if(prev === 10 || prev === -1){
        return 0
      }
    });

    switch(value){
      case 'A': setCount(count + 1); break;
      case 'B': setCount(count - 1); break;
      case 'C': setCount(count * 2); break;
    };
  };

  // if(count > 9){
  //   return (
  //     <div className='App'>
  //       <h3>Reached limit</h3>
  //     </div>
  //   );
  // };

  return <div className='App'>
    <h3>{count}</h3>
    {(count < 10 && count > -1) && (
      <div className='button-Container'>
        <button onClick={() => {count_state('A')}}>Add +1</button>
        <button onClick={() => {count_state('B')}}>Sub -1</button>
        <button onClick={() => {count_state('C')}}>Double *2</button>
      </div>
    )}
    {
      count > 9 && (
        <div className='button-Container'>
          {
            count > 10 && (setCount(10))
          }
          <h2>Reached max limit</h2>
          <button onClick={() => {setCount(0)}}>Reset</button>
        </div>
      )
    }
    {
      count < 0 && (
        <div className='button-Container'>
          <h2>Reached min limit</h2>
          <button onClick={() => {setCount(0)}}>Reset</button>
        </div>
      )
    }
  </div>;
}

export default App;
