import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { clearErrors } from '../actions/errors';
import Errors from '../errors/Errors';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../actions/users';

// TODO : I am able to login without signing up. My errors are working in Postman when tested but are not working on the front end.

const Signup = ({ loading }) => {
  const { loggedIn } = useSelector(store => store.usersReducer );
 
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // code here is what happens on mount
    if(!loading && loggedIn) {
      navigate("/")
    }
    

    return () => {
      // code here is what happens when the component is unmounting
      dispatch(clearErrors())
    }
  }, [loading, loggedIn, navigate, dispatch])

  const handleSubmit = e => {
    e.preventDefault();
    const user = { username, password, passwordConfirmation }
    dispatch(signupUser(user, navigate))
  }

  return (
    <form onSubmit={ handleSubmit }>
      <h1>Create Account</h1>

      <div>
        <label htmlFor="username">Username: </label>
        <input 
          type="text" 
          name="username" 
          id="username"
          value={ username }
          onChange={ e => setUsername(e.target.value) }
          required={true}
         />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input 
          type="password"
          name="password" 
          id="password"
          value={ password }
          onChange={ e => setPassword(e.target.value) }
          required={true}
         />
      </div>
      <div>
        <label htmlFor="password confirmation">Password Confirmation: </label>
        <input 
          type="password"
          name="password confirmation" 
          id="password confirmation"
          value={ passwordConfirmation }
          onChange={ e => setPasswordConfirmation(e.target.value) }
          required={true}
         />
      </div>
      

      <input type="submit" value="Create Account" />
      {/* <li> {setErrors} </li> */}
      <div> <Errors /> </div>
    </form>
  )
}

export default Signup