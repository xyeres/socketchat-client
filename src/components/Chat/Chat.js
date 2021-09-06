import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import getRandomProfilePic from '../../modules/getRandomProfilePic';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import UserMenu from '../UserMenu/UserMenu';

const DEBUG = 0;
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState([]);
  const [menuIsActive, setMenuActive] = useState(false);
  const [userProfilePic, setUserProfilePic] = useState('');

  // Setup Socket.io Endpoint
  let ENDPOINT = '';

  DEBUG ?
    ENDPOINT = 'http://localhost:5001'
    : ENDPOINT = 'https://socketchat-serve.herokuapp.com/';

  useEffect(() => {
    // Get random profile pic and set it
    const { pic, picIndex } = getRandomProfilePic()
    setUserProfilePic(pic)

    // Set room and username
    const { room, name } = queryString.parse(location.search);
    setName(name);
    setRoom(room);

    socket = io(ENDPOINT);
    socket.emit('join', { name, room, picIndex }, (callbackMessage) => {
      // Alert user if username is taken
      if (callbackMessage) {
        alert(callbackMessage);
        window.location = '/';
      }
    })
    // Cleanup
    return () => {
      socket.emit('disconnect');
      socket.off()
    }
  }, [ENDPOINT, location.search])


  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message])
    })
  }, [messages])

  useEffect(() => {
    socket.on('roomData', ({ users }) => {
      setUsers(users)
    })
  }, [users])

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  const handleMenuToggle = () => {
    setMenuActive(!menuIsActive)
  }

  return (
    <div className="col">
      <UserMenu
        room={room}
        name={name}
        users={users}
        menuIsActive={menuIsActive}
        handleMenuToggle={handleMenuToggle}
        getProfilePic={getRandomProfilePic}
      />
      <div className={menuIsActive ? "dim--active" : "dim"}>
        <main className="screen">
          <InfoBar room={room} handleMenuToggle={handleMenuToggle} />
          <div className="containerContainer">
            <div className="desktopContainer">
              <Messages currentUserProfilePic={userProfilePic} getProfilePic={getRandomProfilePic} messages={messages} name={name} />
            </div>
          </div>
        </main>
        <Input room={room} message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  )
}

export default Chat;