import React, { useState } from 'react';
import ManageUser from './components/ManageUser';
import UsersList from './components/users';
import './styles.css';

const initialState = [
  {
    name: 'John',
    id: 1,
  },
  {
    name: 'Jane',
    id: 2,
  },
];

// 1 !== 1; // false
// 2 !=== 1; // true

const App = () => {
  const [users, setUsers] = useState(initialState);
  const [currentEdit, setCurrentEdit] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

  const addUser = (name) => {
    setUsers((st) => [
      ...st,
      // * Equavalent to these --------------
      // {
      //   name: 'John',
      //   id: 1,
      // },
      // {
      //   name: 'Jane',
      //   id: 2,
      // },
      // *  --------------- *
      {
        // name: name,
        name,
        id: st.length + 1,
      },
    ]);
  };

  const removeElement = (id) => {
    console.log('id', id);
    setUsers((st) => st.filter((el) => el.id != id));
    // setUsers((st) =>
    //   st.filter((el) => {
    //     console.log('typeof id', typeof id);
    //     console.log('typeof el.id', typeof el.id);
    //     return el.id !== id;
    //   })
    // );
  };

  const handleUpdate = (el) => {
    console.log('el', el);
    setCurrentEdit(el);
    setShowEditForm(true);
  };

  const updateUser = (updatedEl) => {
    setUsers((st) => {
      return st.map((el) => {
        if (el.id === currentEdit.id) {
          return updatedEl;
        }
        return el;
      });
    });
    setShowEditForm(false);
    setCurrentEdit(null);
  };

  const handleOperation = (name) => {
    console.log('name', name);
  };

  return (
    <div className='App'>
      <UsersList
        users={users}
        handleUpdate={handleUpdate}
        removeElement={removeElement}
      />
      <ManageUser
        addUser={addUser}
        updateUser={updateUser}
        slug={showEditForm ? 'Edit' : 'Add'}
        user={currentEdit}
      />
    </div>
  );
};

export default App;
