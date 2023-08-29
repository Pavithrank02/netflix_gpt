import React, { useRef, useState } from 'react'
import Header from './Header'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { chechValidData } from '../utils/validate'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const handleClick = () => {
    //Validate form data
    console.log(email.current.value)
    const message = chechValidData(email.current.value, password.current.value)
    setError(message)
    console.log(message)
    if (message) return

    if (!isSignInForm) {

      //Signiup logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/109362091?v=4"
          }).then(() => {
            // Profile updated!
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({
              uid: uid, 
              email: email, 
              displayName: displayName, 
              photoURL: photoURL
            }))
            navigate("/browse")
            // ...
          }).catch((error) => {
           setError(error.message)
          });
          
          // console.log(user)
          
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
          console.log(user)
          navigate("/browse")
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
          src='https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg'
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