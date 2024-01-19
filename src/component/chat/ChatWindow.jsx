import React from 'react'
import './css/ChatWindow.scss'

function ChatWindow() {
  return (
    <div className='chat-input'>
      <div className="plus-icon">
        <i className="bi bi-plus"></i>
      </div>
      <div className="input-box">
        <i className="bi bi-emoji-smile"></i>
        <input type="text" name="chat" id="chat" required/>
      </div>
      <div className="send-icon">
        <i className="bi bi-send"></i>
      </div>
    </div>
  )
}

export default ChatWindow
