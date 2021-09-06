import React from 'react';
import Message from './Message/Message';

const Messages = ({ getProfilePic, messages }) => {
  return (<section className="messages">
    {messages.map((message, i) => <Message getProfilePic={getProfilePic} key={i} message={message} />)}
  </section>)
}


export default Messages;