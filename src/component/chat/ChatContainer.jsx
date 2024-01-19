import React from 'react'
import SideBar from './SideBar';
import ChatWindow from './ChatWindow';
import './css/chatContaine.scss'
function ChatContainer() {
  return (
    <div className='chat-container'>
        <SideBar />
        <ChatWindow />
    </div>
  )
}

export default ChatContainer
