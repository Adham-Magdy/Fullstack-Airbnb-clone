import React from 'react'

interface MenuLinkProps{
    onClick:()=> void;
    label:string;
}
const MenuLink: React.FC<MenuLinkProps> = ({label}) => {
  return (
    <div className='py-4 px-6 cursor-pointer hover:bg-gray-100 transition'>
      {label}
    </div>
  )
}

export default MenuLink
