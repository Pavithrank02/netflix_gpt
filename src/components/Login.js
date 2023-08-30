import React, { useRef, useState } from 'react'
import Header from './Header'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { chechValidData } from '../utils/validate'
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const handleClick = () => {
    //Validate form data
    const message = chechValidData(email.current.value, password.current.value)
    setError(message)
    if (message) return

    if (!isSignInForm) {

      //Signiup logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVATAR
          }).then(() => {
            // Profile updated!
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({
              uid: uid, 
              email: email, 
              displayName: displayName, 
              photoURL: photoURL
            }))
            // ...
          }).catch((error) => {
           setError(error.message)
          });
          
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + errorMessage)
          // ..
        });



    } else {
      //signin logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError( errorCode + errorMessage)
        });
    }
  }
  const toggle = () => {
    setIsSignInForm(!isSignInForm);

  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src={BG_URL}
          alt='Netflix Logo'
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input ref={name} type='test' placeholder='Full Name' className='p-4 my-2 w-full bg-gray-700 rounded-lg' />}
        <input ref={email} type='text' placeholder='Email Address' className='p-4 my-2 w-full bg-gray-700 rounded-lg' />
        <input ref={password} type='password' placeholder='Password' className='p-4 my-2 w-full bg-gray-700 rounded-lg' />
        <p className='text-red-500 font-bold text-lg p-2'>{error}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggle}>{!isSignInForm ? "Already resgistered? SignIn Now" : "New to Netflix? SignUp Now"}</p>
      </form>
    </div>
  )
}

export default Login