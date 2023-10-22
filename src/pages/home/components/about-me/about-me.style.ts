import { rem } from "assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss";

const styles= {
    aboutme:{
        // marginTop: '50px',
        // backgroundColor:'white',
        // borderRadius:'15px',
        padding:'50px',

    },
    aboutmeHeading:{
        display:'flex',
    },
    aboutmeTitle:{
        
    },
    horizontal:{},
    hrCustom: {
        display:'flex',
        width: '192px',
        border: 'none',
        height: '3px',
        backgroundImage: 'linear-gradient(to right, #FA5252, #DD2476)',
        margin: '15px 19px',
    },
    aboutmeDesc:{},
};
export const useAboutMeStyles = createUseStyles(styles);
