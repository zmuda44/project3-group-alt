import { useState } from 'react';
// import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import ADD_USER from '../../utils/mutations';




const AddFriend = () => {
  const [userFormState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [addUser, { loading, error, data }] = useMutation(ADD_USER);  

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormState({
      ...userFormState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
console.log(addUser)

    try {

      const {username, email, password} = userFormState;



      // find where you found code that says: variables { ..userFormState} this was the problem the whole time. i was trying to work with userFormState down here. it's somehow destructured for me already
      const response = await addUser({
        variables: { username, email, password },
      });

      document.location.replace('/profile');
   
    }
  catch (e) {
    console.error(e);
  }

  }


  return (
    <div>
      <h4>Add Friend</h4> {
        loading ? <div>Loading...</div> : null
      }
          <div>
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={userFormState.username}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={userFormState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={userFormState.password}
                  onChange={handleChange}
                />
                <button            
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>

          </div>
        </div>
  );
};

export default AddFriend;



