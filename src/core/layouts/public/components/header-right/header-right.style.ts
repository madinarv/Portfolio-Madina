import { createUseStyles } from 'react-jss';
import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { transition } from 'assets/styles/abstracts/mixins';

const classes = {
    icons: {
        display: 'flex',
        // justifyContent: 'space-between',

    },
    navs: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    navbox: {
        displays: 'flex',
        justifyContent: 'flex-start',
    },
    darkicon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: '50%',
        padding: '15px',
        marginRight: '10px',
        '& svg': {
            fontSize: rem(25),
            width: rem(18),
            height: rem(18)
        }
    },
    hamburgericon: {
        display: 'none',
        cursor: 'pointer',
        '@media (max-width: 992px)': {
            display: 'flex',
            backgroundColor: '#EF4060',
            padding: '15px',
            borderRadius: '50%',
            '& svg': {
                fontSize: rem(25),
                width: rem(18),
                height: rem(18),
                color: 'white',
            }
        },
    },
    menuContent: {
        display: 'none',

        '& svg': {
        },
        '@media (max-width: 990px)': {
            position: 'absolute',
            top: '70px',
            left: '0px',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#FFFFFF',
            width: '100%',
            borderRadius: '0px 0px 15px 15px',
            marginBottom: '50px',
            '& a': {
                color: '#44566C',
            }
        }
    },
    allnav: {
        
        '@media (max-width: 990px)': {
            display: 'flex',
            margin: '15px',
            '& span': {
                margin: '10px',
            },

        },
    },
    isActive: {
        backgroundImage: 'linear-gradient(to left, #DD2476, #FA5252EF)',
        borderRadius: '15px',
        color: '#FFFFFF',
        '& a': {

        },
    },
    hamburgerIcon: {},
};

export const useHeaderRightStyles = createUseStyles(classes);


const style = {
    backgroundColor: 'white',
    textColor: 'black',
  };
export const useThemetStyles = createUseStyles(classes);
