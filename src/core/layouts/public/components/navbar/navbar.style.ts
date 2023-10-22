import { createUseStyles } from 'react-jss';

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        '@media (max-width: 991px)': {
            display:'none',
            
        }
    },
    navbg: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: '5px',
        backgroundColor: 'white',
        borderRadius: '20px',
        width: '550px',
        height: '130px',
        '& a':{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: '#F8FAFC',
            borderRadius: '10px',
            width: '70px',
            height: '75px',
            marginRight: '10px',
            color:'#46566C',
            '&:hover': {
                color:'white',
                backgroundImage: 'linear-gradient(to left, #DD2476, #FA5252EF)',
            },
        }
        // #536378
        // A6A6A6
    },
    navbox: {
       
    },
    navicon: {
        display: 'flex',
            justifyContent: 'center',
            marginBottom: '5px',
        '& svg': {
            // color: 'black',
        }

    },
    navtitle: {
            // color:'black',

        '& span': {
            display: 'flex',
            justifyContent: 'center',
        }
    },
    isActive: {
        color:'white !important',
        backgroundImage: 'linear-gradient(to left, #DD2476, #FA5252EF)',
        '& svg':{
            color:'white !important',
        },

    },
};
export const useNavbarStyle = createUseStyles(styles);
