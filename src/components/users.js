import React, { Fragment } from 'react';

const UserList = ({ users, removeElement, handleUpdate }) => {
  console.log('users', users);

  const handleRemove = (e) => {
    console.log('e.target.dataset', e.target.dataset);
    removeElement(+e.target.dataset.id);
  };

  const handleEdit = (e) => {
    handleUpdate({ id: +e.target.dataset.id, name: e.target.dataset.name });
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((el) => (
          <Fragment key={el.id}>
            <li>name : {el.name}</li>
            <button
              data-apple='apple'
              data-id={el.id}
              onClick={handleRemove}
              style={{ color: 'red', cursor: 'pointer' }}
            >
              X
            </button>
            <button
              data-apple='apple'
              data-id={el.id}
              data-name={el.name}
              onClick={handleEdit}
              style={{ marginLeft: '1rem', color: 'blue', cursor: 'pointer' }}
            >
              /
            </button>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
