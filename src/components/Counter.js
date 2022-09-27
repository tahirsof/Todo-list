import React, { useState } from 'react';

const Counter = (props) => {
  const { name, age } = props;

  const [counter, setCounter] = useState(0);

  const makeIncrement = (e) => {
    // setCounter(counter + 1)
    setCounter((st) => st + 1);
  };
  return (
    <div>
      <h1>Counter {props.name} </h1>
      <h4> {counter} </h4>

      <button
        className='myclass'
        style={{
          backgroundColor: 'green',
          color: 'red',
          padding: '10px 20px',
        }}
        // onClick={makeIncrement}
        onClick={props.apply}
      >
        Increment
      </button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
