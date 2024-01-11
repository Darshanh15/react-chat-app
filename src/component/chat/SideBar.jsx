import React from 'react'
import HeaderMenu from './HeaderMenu';
import SerchUser from './SerchUser';
import UserList from './UserList';

function SideBar() {
  return (
    <div>
      <HeaderMenu />
      <SerchUser />
      <UserList />
    </div>
  )
}

export default SideBar
