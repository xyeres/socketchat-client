import React from 'react';

const Input = ({ room, message, setMessage, sendMessage }) => (
  <section className="inputBar">
    <form className="inputBar__form">
      <input
        className="input inputBar__input"
        type="text"
        placeholder={`Message ${room}`}
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
        name="message"
        id="message"
      />
      <button
        aria-label="Send Chat"
        className="btn inputBar__btn"
        onClick={event => sendMessage(event)}
      >
        <i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
    </form>
  </section>
)

export default Input;