import React, { useEffect, useState } from 'react';

const ManageUser = ({ updateUser, user, slug, addUser }) => {
  // const [state, setState] = useState(user ? user.name : '');
  const [state, setState] = useState('');

  useEffect(() => {
    if (!user) return;
    setState(user.name);
  }, [user]);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);

    if (user) {
      updateUser({ id: user.id, name: state });
    } else addUser(state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={state} onChange={handleChange} />
        <button type='submit'>{slug}</button>
      </form>
    </div>
  );
};

export default ManageUser;
