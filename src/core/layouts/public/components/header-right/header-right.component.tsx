/* eslint-disable @typescript-eslint/no-explicit-any */
import { useHeaderRightStyles } from './header-right.style';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiMoon } from 'react-icons/bi';
import { BsSun } from 'react-icons/bs';
import { navmenu } from '../../components/navbar/index';
import { NavLink, useLocation } from 'react-router-dom';
import { toggleTheme } from 'store/store.reducer';
import { useDispatch, useSelector } from 'react-redux';

const HeaderRightComponent = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const dispatch = useDispatch();
    // const mode = localStorage.getItem('mode');
    // console.log(mode);
    const {pathname} = useLocation();
    
    const mode = useSelector((state:any) =>state.mode);
    const classes = useHeaderRightStyles();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    // const mode = localStorage.getItem('mode');

    useEffect(()=>{
    localStorage.setItem('mode', mode.toString());
    }, [mode]);
    return (
        <div className={classes.icons}>
            <div className={classes.darkicon} onClick={() =>dispatch(toggleTheme())}>
                {
                    mode ? <BsSun /> : <BiMoon />
                }
            </div>
            <div className={classes.hamburgericon} onClick={toggleMenu}>
                <AiOutlineMenu />
            </div>
            {
                menuOpen &&
                <div className={classes.menuContent}>
                    {
                        navmenu.map((nav: any, index: number) => (
                            <NavLink onClick={()=>setMenuOpen(false)} key={index} to={nav.url} className={nav.url === pathname ? classes.isActive : ''}>
                                <div className={classes.allnav}>
                                    <div>
                                        {nav.icon}
                                    </div>
                                    <div>
                                        <span>{nav.name}</span>
                                    </div>
                                </div>
                            </NavLink>
                        )
                        )
                    }
                </div>

            }


        </div>
    );
};

export default HeaderRightComponent;

// get useselector
// set dispatch