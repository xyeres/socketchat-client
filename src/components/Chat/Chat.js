import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import getRandomProfilePic from '../../modules/getRandomProfilePic';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import UserMenu from '../UserMenu/UserMenu';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";


const firebaseApp = initializeApp({
  apiKey: "AIzaSyBVpnE5WC2Wt0JjXs_b7AVIHf5TWxQPeiY",
  authDomain: "fir-intro-441aa.firebaseapp.com",
  projectId: "fir-intro-441aa",
  storageBucket: "fir-intro-441aa.appspot.com",
  messagingSenderId: "558016156777",
  appId: "1:558016156777:web:b936004d62970741843ef8",
  measurementId: "G-MRY7JVDPN1"
});

const db = getFirestore();

async function getMessagesFromDB() {
  const querySnapshot = await getDocs(collection(db, "messages"));

  let messages = querySnapshot.docs.map((msg) => {
    return msg.data()
  });

  return messages;
}

async function saveMessageToDB(room, user, text, picIndex) {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      room,
      user,
      text,
      picIndex
    });
    console.log("Messsage written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error saving message: ", e);
  }
}

const DEBUG = 1;
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState([]);
  const [menuIsActive, setMenuActive] = useState(false);
  const [userProfilePic, setUserProfilePic] = useState('');
  const [userPicIndex, setUserPicIndex] = useState();

  // Setup Socket.io Endpoint
  let ENDPOINT = '';

  DEBUG ?
    ENDPOINT = 'http://localhost:5001'
    : ENDPOINT = 'https://socketchat-serve.herokuapp.com/';

  useEffect(() => {
    // Get random profile pic and set it
    const { pic, picIndex } = getRandomProfilePic()
    setUserPicIndex(picIndex)
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
      getMessagesFromDB()
        .then(msgs => setMessages(msgs))
      console.log('messages ', messages)
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
      saveMessageToDB(room, name, message, userPicIndex);
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
              <Messages currentUserProfilePic={userProfilePic} getProfilePic={getRandomProfilePic} messages={messages} />
            </div>
          </div>
        </main>
        <Input room={room} message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  )
}

export default Chat;