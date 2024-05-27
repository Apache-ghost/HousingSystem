import React, { useState, useEffect } from 'react';
import './Header.css';
import './index.css';
import { BiMenuAltRight } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import 'firebase/auth';
import { auth } from '../server/Config'; // Import the Firebase authentication module

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [userPhotoURL, setUserPhotoURL] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setUserPhotoURL(user?.photoURL);
      setUserEmail(user?.email);
    });

    return unsubscribe;
  }, []);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./public/images/Icon.png" alt="icon" width={50} />
        <div className="hero-title">
          <h1>MOVE-IN</h1>
        </div>
        <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
          <a href="/">Home</a>
          <a href="/">About us</a>
          <a href="/Property">Properties</a>
          <a href="/">Agents</a>
          <a href="/">Contact us</a>

          {currentUser ? (
            <div className="current-user">
              {userPhotoURL ? (
                <img src={userPhotoURL} alt="Profile" className="profile-image" />
              ) : (
                <div className="profile-image profile-placeholder">
                  {currentUser.displayName?.charAt(0).toUpperCase()}
                </div>
              )}
              <p>Welcome, {currentUser.displayName}!</p>
              <p>Hello, {userEmail}</p>
              <button className="button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <NavLink className="button" to="/Login" activeClassName="active">
              <p>Log-in</p>
            </NavLink>
          )}
        </div>
        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Navbar;