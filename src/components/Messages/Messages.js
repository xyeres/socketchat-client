import React from 'react';
import Message from './Message/Message';

const Messages = ({ getProfilePic, messages, name }) => {
  return (<section className="messages">
    {messages.map((message, i) => <Message getProfilePic={getProfilePic} key={i} message={message} name={name} />)}
  </section>)
}


export default Messages;