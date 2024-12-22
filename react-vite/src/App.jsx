import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    <>
      <div className='w-full h-screen flex items-center duration-200 bg-black' style={{backgroundColor : color}}>
        <div className='fixed flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap shadow-lg justify-center gap-3 px-3 bg-white py-2 rounded-3xl'>
            <button className=' outline-none px-4 py-2 rounded-full text-black shadow-lg bg-red-500'
            onClick={() => setColor('red')}>Red</button>
            <button className=' outline-none px-4 py-2 rounded-full text-black shadow-lg bg-green-500'
            onClick={() => setColor('green')}>Green</button>
            <button className=' outline-none px-4 py-2 rounded-full text-black shadow-lg bg-yellow-500'
            onClick={() => setColor('Yellow')}>Yellow</button>
            <button className=' outline-none px-4 py-2 rounded-full text-black shadow-lg bg-blue-500'
            onClick={() => setColor('Blue')}>Blue</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
