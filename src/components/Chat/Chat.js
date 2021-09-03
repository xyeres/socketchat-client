import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import getRandomProfilePic from '../../modules/getRandomProfilePic';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import UserMenu from '../UserMenu/UserMenu';

const DEBUG = 0


let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('Anonymous');
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
    const { pic, picIndex } = getRandomProfilePic()
    setUserProfilePic(pic)

    const { room, name } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room, picIndex }, (callbackMessage) => {
      // Do stuff when user joins...
      if (callbackMessage) {
        alert(callbackMessage);
        window.location = '/';
      }
    })
    // Cleanup when the component dismounts:
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
    console.log(users)
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
        userProfilePic={userProfilePic}
      />
      <div className={menuIsActive ? "dim--active" : "dim"}>
        <main className="screen">
          <InfoBar room={room} handleMenuToggle={handleMenuToggle} />
          <div className="containerContainer">
            <div className="desktopContainer">
              <Messages getProfilePic={getRandomProfilePic} messages={messages} name={name} />
            </div>
          </div>
        </main>
        <Input room={room} message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  )
}

export default Chat;