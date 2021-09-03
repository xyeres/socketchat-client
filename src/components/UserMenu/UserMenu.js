import React from 'react';


const UserMenu = ({ getProfilePic, room, name, users, userProfilePic, menuIsActive, handleMenuToggle }) => {
  return (
    <section className={menuIsActive ? "userMenu userMenu--active" : "userMenu"}>
      <div className="logo">
        <div role="button" tabIndex="0" className="logo__icon" aria-label="socketchat logo"><i className="fa fa-comments-o"
          aria-hidden="true"></i></div>
        <div className="logo__title">Socketchat</div>
        <i onClick={handleMenuToggle} className="fa fa-times logo__btn" id="menuClose" role="button" tabIndex="0" aria-label="Close menu"></i>
      </div>

      <div className="infoBar__title">{room}</div>
      {
        users
          ? (<div className="activeUsers">
            <p className="activeUsers__heading">Online — {users.length}</p>
            <ul className="users">
              {users.map(({ name, id, picIndex }) => (
                <li className="user" key={id}>
                  <div className="user__userImage">
                    <i className="user__onlineIcon" aria-hidden="true"></i>
                    <img src={getProfilePic(picIndex)} alt={`user# ${id}`} />
                  </div>
                  <div className="user__detail">
                    <div className="user__header">
                      <div className="user__name">{name}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>) : null
      }
      <a href="/" role="button" tabIndex="0" className="logout__btn btn">Leave room</a>
    </section>
  )
}

export default UserMenu;