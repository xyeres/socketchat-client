import React from 'react';
import ReactEmoji from 'react-emoji';

import profilePic from '../../../img/profiles/building.png'

const Message = ({ getProfilePic, message: { user, text, picIndex }, name }) => {
  // let isSentByCurrentUser = false;
  let isSentByAdmin = false;

  // const trimmedName = name.trim().toLowerCase();
  // if (user === trimmedName) isSentByCurrentUser = true;
  if (user === 'admin') isSentByAdmin = true;


  return (
    isSentByAdmin
      ? (
        <div className="message">
          <img src={profilePic} alt="user #231" className="message__userImage" />
          <div className="message__detail">
            <div className="message__header">
              <div className="message__userName">{'✨ChatBot: ' + user}</div>
              <div className="message__timestamp">07/14/2021</div>
            </div>
            <div className="message__text">{ReactEmoji.emojify(text)}</div>
          </div>
        </div>
      ) : (
        <div className="message">
          <img src={getProfilePic(picIndex)} alt="user #231" className="message__userImage" />
          <div className="message__detail">
            <div className="message__header">
              <div className="message__userName">{user}</div>
              <div className="message__timestamp">07/14/2021</div>
            </div>
            <div className="message__text">{ReactEmoji.emojify(text)}</div>
          </div>
        </div>
      )
  )
}


export default Message;