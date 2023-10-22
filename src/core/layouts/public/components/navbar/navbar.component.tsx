import React, { useEffect, useState } from 'react';
import { useNavbarStyle } from './navbar.style';
import { navmenu } from '.';
import { NavLink, useLocation } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const NavbarComponent = () => {
  const styles = useNavbarStyle();
  const { pathname } = useLocation();
  // console.log(pathname);
  // const [ isActive, setIsActive ] = useState<any>();

  // useEffect(() => {
  //     setIsActive( pathname);
  // }, [pathname]);

  // console.log(isActive, 'active');
  const mode = useSelector((state: any) => state.mode);
  // console.log(mode);
  useEffect(() => {
    localStorage.setItem('mode', mode.toString());
  }, [mode]);

  return (
    <div className={styles.navbar}>
      <div
        className={styles.navbg}
        style={{ background: `${mode ? 'black' : 'white'}` }}
      >
        {navmenu.map((nav: any, index: number) => {
          return (
            <NavLink
              to={nav.url}
              key={index}
              className={nav.url === pathname ? styles.isActive : ''}
              style={{
                backgroundColor: `${mode ? '#212425' : ''}`,
              }}
            >
              {/*   <div className={`${classes.icon} ${isActive ? classes.activeIcon : ''}`}> */}
              <div className={styles.navbox}>
                <div className={styles.navicon} style={{ color: `${mode ? '#526377' : 'red'}` }} >{nav.icon}</div>
                <div className={styles.navtitle}>
                  <span>{nav.name}</span>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default NavbarComponent;
