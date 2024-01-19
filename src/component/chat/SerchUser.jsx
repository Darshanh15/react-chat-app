import React from 'react'
import './css/Serchuser.scss'

function SerchUser() {
  return (
    <div className='search-chat'>
      <div>
        <input type="search" name="user" id="user" placeholder='Search or start new chat' required />
        <i className="bi bi-search"></i>
      </div>
    </div>
  )
}

export default SerchUser
