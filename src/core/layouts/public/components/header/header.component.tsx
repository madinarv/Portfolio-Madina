import HeaderNavbarComponent from '../header-navbar/header-navbar.component';
import './header.style';
import HeaderSubComponent from '../header-sub/header-sub.component';
import {useHeaderStyles} from './header.style';
import ProfileComponent from '../profile/profile.component';
import NavbarComponent from '../navbar/navbar.component';

const HeaderComponent = () => {
    const classes = useHeaderStyles();
    return (
        <div className={classes.header}>
            <div className='container'>
                  <div className="col-12">
                  <HeaderNavbarComponent/>
                  </div>
                 
            </div>
        </div>
    );
};


export default HeaderComponent;
