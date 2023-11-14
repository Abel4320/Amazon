import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './fire'
import { useDispatch } from 'react-redux'
import {setUserEmail} from '../redux/cartSlice'

const CreateAcc = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

 const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      console.log('Account created:', { email, password });
       if (passwordMatch) {
      register(e);
    }
    };
  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        if (authUser) {
          // Dispatch the email to Redux store
          dispatch(setUserEmail(email));
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  pt-9">
          <div className="max-w-md w-[400px] bg-gray-100 p-6 rounded-lg shadow-lg border border-black">
    <div className="pl-[105px] mb-9 pt-3">
        <Link to={"/"}><img className=" h-[50px]  pt-2 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"></img></Link>
      </div>
        <h2 className="text-2xl font-semibold mb-4">Create Account</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
               required/>
            {password && confirmPassword && (passwordMatch ? (<p className="text-green-500 text-sm mt-1">Passwords match.</p>) : ( <p className="text-red-500 text-sm mt-1">Passwords do not match.</p>
  )
)}
                  </div>
                   
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-400"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAcc;
