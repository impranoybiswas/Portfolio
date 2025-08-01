import React from 'react'

interface Props {
    menuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
}

export default function MenuButton({menuOpen, setMenuOpen, className}: Props) {
  return (
    <div 
    onClick={() => setMenuOpen(!menuOpen)}
    className={`${className} cursor-pointer relative flex justify-center items-center`}>
      <div className={`${menuOpen ? '-rotate-45 top-1/2 -translate-y-1/2': 'top-[2px]'} bg-white w-full h-2/15 rounded-full absolute transition-all duration-600 ease-in-out`}/>
      <div className={`${menuOpen ? 'opacity-0' : 'opacity-100'} bg-white w-2/3 ml-auto h-2/15 rounded-full transition-all duration-400 ease-in-out`}/>
      <div className={`${menuOpen ? 'rotate-45 bottom-1/2 translate-y-1/2': 'bottom-[2px]'} bg-white w-full h-2/15 rounded-full absolute transition-all duration-600 ease-in-out`}/>
    </div>
  )
}
