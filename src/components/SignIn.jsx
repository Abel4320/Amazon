import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './fire'
import { useDispatch } from 'react-redux'
import {setUserEmail} from '../redux/cartSlice'
const Signin = () => {
    const dispatch = useDispatch();
  const navigate=useNavigate()
  const [email, setEmial] = useState('')
  const [password, setPassword] = useState('')
  const signin = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password).then(auth => {
      if (auth) {
        dispatch(setUserEmail(email))
        navigate('/')
      }
    }).catch((error)=> alert(error.message))
  }
  //   const register = (e) => {
  //     e.preventDefault()
  //     auth.createUserWithEmailAndPassword(email, password).then(auth => {
  //       if (auth) {
  //       navigate("/")
  //     }
  //     } ).catch((error)=>alert(error.message))
  // }
  return (
    <div className="">
    
      <div className= ' m-auto pt-7 ' style={{ width: '40vw' }} >
    
        <div className="  bg-gray-100  p-6 rounded border border-black shadow-lg">
              <div className=" flex justify-center pb-8 pt-8">
        <Link to={"/"}><img className=" h-[50px]  pt-2 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"></img></Link>
      </div>
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmial(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-400"
            onClick={signin}
          >
            Sign In
          </button>
          <div className="text-xs">
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </div>
        </form>
        <div className="mt-4">
          <p>
            New to Amazon?{' '}
            <Link to='/createacc'>
              <button   className="text-blue-500">
              Create your Amazon account
            </button>
         </Link>
          </p>
        </div>
      </div>
     </div>
    </div>
)

};

export default Signin;