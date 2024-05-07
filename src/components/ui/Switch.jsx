"use client"
import { Sun, Moon } from 'lucide-react';

const Switch = ({ checked, onChange }) => {

  return (

    <label
  htmlFor="theme-switch"
  className={`relative h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500 ${
    checked ?  'bg-grey-800':'bg-gray-300' 
  }`}
>
  <div className='w-full h-full flex items-center justify-between px-2'>
    <Moon className='w-4'/>
    <Sun className='w-4'/>
  </div>

  <input 
  type="checkbox" 
  id="theme-switch" 
  className="peer sr-only"
  checked={checked}
  onChange={onChange}
   />

  <span
        className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
      </span>
</label>
  )
}

export default Switch;
