import HeaderRightComponent from '../header-right/header-right.component';
import {useHeaderNavbarStyles} from './header-navbar.style';
import {NavLink} from 'react-router-dom';
import {Routes} from '../../../../../router/routes';
import logo from 'assets/images/statics/logo.png';

const   HeaderNavbarComponent = () => {
    const classes = useHeaderNavbarStyles();

    return (
        <div className={`${classes.navbar} `}>
            <div className={classes.navContent}>
                    <div className={classes.left}>
                        <NavLink to={Routes.default}>
                            <img src={logo} alt='logo'/>
                        </NavLink>
                    </div>
                    <HeaderRightComponent/>
            </div>
            
            
        </div>
    );
};

export default HeaderNavbarComponent;
