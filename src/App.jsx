import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#ffffff")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor:       color }}>
        <div className='fixed flex flex-wrap justify-center bottom-30 inset-x-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-1.5 rounded-full'>
         
          <button className='outline-none px-4 rounded-full text-white shadow-2xl hover:cursor-pointer' style={{backgroundColor: "red"}} onClick={() => setColor( "Red" )}> Red </button>

          <button className='outline-none px-4 rounded-full text-white shadow-2xl hover:cursor-pointer' style={{backgroundColor: "Green"}} onClick={() => setColor( "Green" )} > Green </button>

          <button className='outline-none px-4 rounded-full text-white shadow-2xl hover:cursor-pointer' style={{backgroundColor: "Blue"}} onClick={() => setColor( "Blue" )} > Blue </button>

          <button className='outline-none px-4 rounded-full text-white shadow-2xl hover:cursor-pointer' style={{backgroundColor: "Black"}} onClick={() => setColor( "Black" )} > Black </button>

          <button className='outline-none px-4 rounded-full text-white shadow-2xl hover:cursor-pointer' style={{backgroundColor: "Olive"}} onClick={() => setColor( "Olive" )} > Olive </button>

          <button className='outline-none px-4 rounded-full text-white shadow-2xl hover:cursor-pointer' style={{backgroundColor: "Grey"}} onClick={() => setColor( "Grey" )} > Grey </button>

          <button className='outline-none px-4 rounded-full text-black-500 shadow-2xl hover:cursor-pointer' style={{backgroundColor: "Lavender"}} onClick={() => setColor( "Lavender" )} > Lavender </button>

          <button className='outline-none px-4 rounded-full text-white shadow-2xl hover:cursor-pointer' style={{backgroundColor: "Purple"}} onClick={() => setColor( "Purple" )} > Purple </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
