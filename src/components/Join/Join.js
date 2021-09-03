import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
  const [name, setName] = useState('Anonymous');
  const [room, setRoom] = useState('tea-tasting');

  return (
    <div className="bg">
      <div className="loginContainer">
        <main className="login">
          <div className="logo login__logo">
            <div href="/" role="button" tabIndex="0" className="logo__icon" aria-label="socketchat logo"><i className="fa fa-comments-o"
              aria-hidden="true"></i></div>
            <div className="logo__title">Socketchat</div>
          </div>
          <form className="login__form">
            <input type="text" placeholder="Nickname" name="user" id="user" className="input login__input form__user"
              autoFocus onChange={(event) => setName(event.target.value)} />

            <input type="text" placeholder="Room to join" name="room" id="room" className="input login__input form__room"
              onChange={(event) => setRoom(event.target.value)} />
            <Link
              onClick={(event) => !name || !room ? event.preventDefault() : null}
              to={`/chat?name=${name}&room=${room}`}
            >
              <button type="submit" tabIndex="0" className="btn login__btn">Join Chat</button>
            </Link>
          </form>
        </main>
      </div>
    </div>
  )
}

export default Join;