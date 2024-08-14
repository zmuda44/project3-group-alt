import { useState } from 'react';
// import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_TRIP } from '../../utils/mutations';




const AddTrip = () => {
  const [userFormState, setFormState] = useState({
    location: '',
    journalEntry: '',
  });

  const userId = localStorage.getItem('userId');

  


  const [addTrip, { loading, error, data }] = useMutation(ADD_TRIP);  

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormState({
      ...userFormState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();


    try {

      const {location, journalEntry} = userFormState;

      console.log(location, journalEntry, userId)



      // find where you found code that says: variables { ..userFormState} this was the problem the whole time. i was trying to work with userFormState down here. it's somehow destructured for me already
      const response = await addTrip({
        variables: { location, journalEntry, userId },
      });

      setFormState({
        location: '',
        journalEntry: '',
      });
   
    }
  catch (e) {
    console.error(e);
  }

  }


  return (
    <div>
      <h4>Add Trip</h4> {
        loading ? <div>Loading...</div> : null
      }
          <div>
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Location of trip"
                  name="location"
                  type="text"
                  value={userFormState.location}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Journal entry"
                  name="journalEntry"
                  type="text"
                  value={userFormState.journalEntry}
                  onChange={handleChange}
                />
                {/* <input
                  className="form-input"
                  placeholder="user"
                  name="userId"
                  type="text"
                  value={userFormState.user}
                  onChange={handleChange}
                /> */}
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

export default AddTrip;



