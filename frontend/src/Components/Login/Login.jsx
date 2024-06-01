/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useNavigate  } from 'react-router-dom';

function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate() 

  const loginUser = async()=>{
    try {
      const response = await fetch('http://localhost:8080/api/v1/login',{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
        body:JSON.stringify({
          email,password
        })        
      });
      const data = await response.json()
          console.log(data)
      if(response.ok) {
        toast.success("User Login SuccessFully",{
        style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
          },
            })
            navigate('/')
            localStorage.setItem('token',data.Data)
            localStorage.setItem('name',data.UserName)
          }
          if(response.status===400){
            toast.error('Please Fill Email And Password Inputs')
          }
         if (response.status===401){
            toast.error('User Not Found With This Email Id')
          }
          if(response.status===402){
            toast.error('Password is incorrect')
          }
    } catch (error) {
      console.log(error)
    }
  }

  return  (
    <div className='flex justify-center h-screen'>
      <div className='mt-12 grid min-w-[40%] h-96 rounded-md'>
        <div className='flex items-center justify-center'>
          <div className='flex flex-col mt-6 gap-6'>
            <h1 className='text-center text-4xl text-gray-600 mb-7'>Login To Your Account</h1>
            <div className='email gap-4 flex'>
              <label htmlFor=''>Email:</label>
              <input
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                name='email'
                type='email'
                placeholder='james@gmail.com'
                className='outline-none'
              />
            </div>
            <div className='passowrd gap-4 flex'>
              <label htmlFor=''>Password:</label>
              <input
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                name='password'
                type='password'
                className='outline-none'
                placeholder='Your Password....'
              />
            </div>
            <div>
              <p className='mt-8 text-gray-600'>
                Don't Have an Account?
                <Link className='text-red-500 m-1' to={'/register'}>
                  Register
                </Link>
              </p>
              <button
              type='button'
              onClick={loginUser}
                className='hover:bg-red-400 duration-500 bg-[#F9CB9C] w-full rounded-md mt-6 text-white py-2'
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login