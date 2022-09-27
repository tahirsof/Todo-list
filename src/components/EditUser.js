import React, { useState } from 'react';

const CreateUser = ({ addUser }) => {
  const [state, setState] = useState('');

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    addUser(state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={state} onChange={handleChange} />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default CreateUser;
