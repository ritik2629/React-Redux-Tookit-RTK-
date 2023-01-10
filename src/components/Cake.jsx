import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from '../feature/cake/cakeSlice'

const Cake = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.cake.numOfCake)
  return (
    <div>
      <h1 className=' text-2xl text-blue-700 font-bold'>Cake :{state}</h1>
      <button className=' bg-red-400 m-3 p-3 text-white' onClick={() => dispatch(ordered())}>Cake Ordered</button>
      <button className=' bg-teal-700 p-3 text-white' onClick={() => dispatch(restocked())}>Cake Restocked</button>
    </div>
  )
}

export default Cake