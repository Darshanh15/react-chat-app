import React from 'react'
import ChatContainer from '../chat/ChatContainer'
import './Home.scss'


function Home(props) {
  const apiKey = process.env.PROJECT_ID
  return (
    <div className='app-body'>
      {/* <ChatContainer /> */}
      {apiKey}
    </div>
  )
}

export default Home
