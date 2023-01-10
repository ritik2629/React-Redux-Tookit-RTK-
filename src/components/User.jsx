import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../feature/user/userSlice'

const User = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.user.users)
  const [data,setData]=useState([])

  useEffect(()=>{
      setData(state)
  })
  // console.log(data)
  return (
    <div>
      <h1 className=' text-2xl text-yellow-700 font-bold'>User :{data}</h1>
      <button className=' bg-teal-400 m-3 p-3 text-white' onClick={() => dispatch(fetchUser())}>Fetch User</button>
    </div>
  )
}

export default User;