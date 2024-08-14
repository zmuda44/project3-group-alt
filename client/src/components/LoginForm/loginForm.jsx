import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

// import Auth from '../utils/auth';

const Login = () => {
  const [userFormState, setFormState] = useState({ email: '', password: '' });
  const [loginUser, { loading, error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...userFormState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userFormState);
    try {
      const {email, password} = userFormState;

      console.log(email, password)
      const response = await loginUser({
        // variables: { ...formState },
        variables: { email, password },
      });

      const userId = response.data.loginUser._id;

      if (!userId)  {
        alert ('Invalid credentials');
      }
      else {
        document.location.replace('/profile');
      }



      localStorage.setItem('userId', userId);

    //   Auth.login(data.login.token);
    // } catch (e) {
    //   console.error(e);
    // }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  }  catch (e) { console.error(e); }
}

  return (
    <div>
      <div>
        <div>
          <h4>Login</h4>
          <div>

              <form onSubmit={handleFormSubmit}>
                <input                  
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={userFormState.email}
                  onChange={handleChange}
                />
                <input               
                  placeholder="******"
                  name="password"
                  type="password"
                  value={userFormState.password}
                  onChange={handleChange}
                />
                {/* <input               
                  placeholder="******"
                  name="confirm-password"
                  type="password"
                  value={userFormState.password}
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
      </div>
    </div>
  );
};

export default Login;


// {data ? (
//   <p>
//     Success! You may now head{' '}
//     <Link to="/">back to the homepage.</Link>
//   </p>
// ) : (


// )}




// {error && (
//   <div>
//     {error.message}
//   </div>
// )}
