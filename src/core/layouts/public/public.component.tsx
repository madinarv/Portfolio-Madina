import HeaderComponent from './components/header/header.component';
import LeftMenuComponent from './components/left-menu/left-menu.component';
import { Outlet } from 'react-router-dom';
import FooterComponent from './components/footer/footer.component';
import { usePublicLayoutStyles } from './public.style';
import classNames from 'classnames';
import { useStore } from '../../../store/store.config';
import ProfileComponent from './components/profile/profile.component';
import NavbarComponent from './components/navbar/navbar.component';
import { useSelector } from 'react-redux';
import { url } from 'inspector';
import bg from 'assets/images/statics/bg.jpg';
import bgtwo from 'assets/images/statics/bgtwo.jpg';
import { useEffect } from 'react';

const PublicComponent = () => {
  const classes = usePublicLayoutStyles();
  const leftMenu = useStore('leftMenu');

  const publicClasses = classNames({
    [classes.content]: true,
    [classes.active]: !leftMenu,
  });

  const mode = useSelector((state: any) => state.mode);
  // console.log(mode);
  useEffect(() => {
    localStorage.setItem('mode', mode.toString());
  }, [mode]);

  return (
    <div
      className={classes.public}
      style={{ backgroundImage: `url(${mode ? bgtwo : bg})` }}
    >
      {mode}
      <HeaderComponent />
      <div className='container'>
        <div className='row' style={{ marginTop: '200px' }}>
          <div className='col-lg-4'>
            <ProfileComponent />
          </div>
          <div className='col-lg-8'>
            <NavbarComponent />
            <div className={classes.rightContent}  style={{backgroundColor : `${ mode ? 'black' : 'white' }`}}>
              <div className={publicClasses}>
                <Outlet />
              </div>
              <FooterComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicComponent;
