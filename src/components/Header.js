import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { Logo, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearch } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  const showGptSearch = useSelector(store => store.gpt.showGpt)
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
        const { uid, email, displayName, photoURL } = user;
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

  const handleGptClick = () => {
    dispatch(toggleGptSearch())
  }

  const handleLanguage = (e) => {

    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
      <img
        className='w-44 mx-auto md:mx-0'
        src={Logo} />
      {user &&
        (<div className='flex p-2 justify-between'>
          {showGptSearch && <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguage}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>}
          {<button
            className='py-1 px-2 bg-purple-800 text-white rounded-lg mr-3'
            onClick={handleGptClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search" }
          </button>}
          <img
            className='hidden md:block w-10 h-10 mt-3'
            src={user?.photoURL} />
          <button className='font-bold text-white' onClick={handleSignOut}>Sign out</button>
        </div>)}
    </div>
  )
}

export default Header