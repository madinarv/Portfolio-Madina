import { createUseStyles } from "react-jss";

const style = {
    contact: {
        // backgroundColor: 'white',
        // marginTop: '50px',
        padding: '50px',
        // borderRadius: '15px',
    },
    contactcard: {
        backgroundColor: '#FCF4FF',
    },
    formWrapper: {
        backgroundColor: '#F8FBFB !important',
        borderRadius: '15px',
        padding: '20px',
        marginTop:'15px',
    },
    title: {
        marginBottom: '16px',
        fontSize: '30px',
        '& span': {
            color: '#44566C',
        },
        '& p': {
            marginTop: '16px',
            color: 'black',
        },
    },
    inputContainer: {
        marginBottom: '16px',
        '& button ': {
            backgroundColor: 'transparent',
            border: '1px solid black',
            color: 'black',
            cursor: 'pointer',

        },

    },
    btn: {
        '&:hover': {
            backgroundColor: 'black',
            color: 'rgb(255 255 255',
        },
    },



};
export const useContactStyles = createUseStyles(style);
