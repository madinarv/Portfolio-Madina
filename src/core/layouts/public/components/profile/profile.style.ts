import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

const styles = {
    profile: {
        backgroundColor: 'white',
        borderRadius: '20px',
        boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em',
        position: 'sticky',
        top: '0px',
        '@media (max-width: 990px)': {
            marginTop: '105px'
        }
    },
    profilWrapper: {
        margin: '35px 0px',
        zIndex: '9999',
    },
    profilImg: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        top: rem(-100),
        position: 'absolute',
        '& img': {
            borderRadius: '20px',
            width: rem(250),
            height: rem(220),
            objectFit: 'cover',
            boxShadow: ' rgba(149, 157, 165, 0.2) 0px 8px 24px',
            // #FEACB8
        },
    },
    profileInfo: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '130px',
    },
    profileName: {
        marginTop: '25px',
    },
    profilePosition: {
        margin: '20px 0',
        color: 'gray',

    },
    profileSocial: {
        display: 'flex',
        marginBottom: '20px',
    },
    socialmedia: {
        backgroundColor: '#ecf3f3',
        marginRight: '5px ',
        borderRadius: '5px',
        padding: '7px',
        cursor:'pointer',
        '& svg': {
            marginRight: '2px ',
            fontSize: '20px',
        },
        '&:nth-child(1)': {
            color: '#269FFF', 
        },
        '&:nth-child(2)': {
            color: 'black', 
        },
    },
    connectioncontainer: {
        backgroundColor: '#F3F6F6',
        padding: '20px',
        borderRadius: '18px',
        margin: '10px 20px',
        maxWidth: '100%',

    },
    connection: {
        margin: '15px 0px'
    },
    connectionBox: {
        display: 'flex',
        '& svg': {
            marginRight: '10px',
            backgroundColor: 'white',
            borderRadius: '5px',
            width: '28px',
            height: '33px',

            '&:hover': {
                backgroundImage: 'linear-gradient(to left, #DD2476, #FA5252EF)',
                color: 'white !important',
            },

            '&:nth-child(1)': {
                color: '#E02A74',
            },

        },


    },
    connectionInfo: {
        '& p,span': {

            alignItems: 'center',
        }

    },
    connectionSvg: {
        '& svg': {
            // backgroundImage: 'linear-gradient(to right, #FA5252, #DD2476)',
        },


    },

    connetionIcon: {

    },
    connectionTitle: {
        '& p': {
            fontSize: '12px',
            color: '#44566C',
        }
    },
    connectionDesc: {
        maxWidth: '100%',
        width: '100px !important',

        '& span': {
        },
    },
    btn: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        padding: '5px',
        position: 'relative',
        '& button': {
            display: 'flex',
            justifyContent: 'center',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            padding: '15px 45px',
            marginBottom: '25px',
            backgroundImage: 'linear-gradient(to right, #FA5252, #DD2476)',
            cursor: 'pointer',
            alignItems: 'center',

            '&:hover': {
                backgroundImage: 'linear-gradient(to left, #DD2476, #FA5252EF)',
            },
            '& svg': {
                marginRight: '4px',
                fontSize: '19px',
            },
            '& span': {
                fontSize: '19px',
            },

        },
    },


};


export const useProfileStyle = createUseStyles(styles);
