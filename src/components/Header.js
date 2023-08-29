import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { Logo } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      
    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });
  }
  useEffect(() => {

    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({
          uid: uid, 
          email: email, 
          displayName: displayName, 
          photoURL: photoURL
        }))
        navigate('/browse')
     
        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate('/')
    
        // ...
      }
    });

    return () => unSubscribe()

  }, [])
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
     <img 
     className='w-44'
     src={Logo} />
   {user && <div className='flex'>
    <img
    className='w-8 h-8 mt-5' 
    src={user?.photoURL} />
   <button className='font-bold text-white' onClick={handleSignOut}>Sign out</button>
   </div>}
    </div>
  )
}

export default Header