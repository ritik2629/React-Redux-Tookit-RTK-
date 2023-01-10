import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from '../feature/Icecream/icecreamSlice'

const Icecream = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.icecream.numOfIcecream)
  return (
    <div>
      <h1 className=' text-2xl text-yellow-700 font-bold'>IceCream :{state}</h1>
      <button className=' bg-teal-400 m-3 p-3 text-white' onClick={() => dispatch(ordered())}>Icecream Ordered</button>
      <button className=' bg-pink-700 p-3 text-white' onClick={() => dispatch(restocked())}>Icecream Restocked</button>
    </div>
  )
}

export default Icecream;