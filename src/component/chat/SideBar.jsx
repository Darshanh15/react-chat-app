import React from 'react'
import HeaderMenu from './HeaderMenu';
import SerchUser from './SerchUser';
import UserList from './UserList';
import './css/SideBar.scss';

function SideBar() {
  return (
    <div className='left-side'>
      <HeaderMenu />
      <SerchUser />
      <UserList />
    </div>
  )
}

export default SideBar
