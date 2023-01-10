import React from 'react'
import Cake from './components/Cake';
import Icecream from './components/Icecream';
import User from './components/User';

const App = () => {
  return (
    <div className='text-center'>
      <Cake/>
      <Icecream/>
      <User/>
    </div>
  )
}

export default App