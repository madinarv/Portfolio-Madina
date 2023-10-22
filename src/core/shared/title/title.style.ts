import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';
import { createUseStyles } from 'react-jss';

const classes = {
    title:{
  
    },
    aboutmeHeading:{
        display:'flex',

    },
    aboutmeTitle:{
        
    },
    horizontal:{
        [breakpoint(1200)] : {
            display:'none',
        },
    },
    hrCustom: {
        display:'flex',
        width: '192px',
        border: 'none',
        height: '3px',
        backgroundImage: 'linear-gradient(to right, #FA5252, #DD2476)',
        margin: '15px 19px',
    },
    aboutmeDesc:{
        marginTop: '30px',
        '& p':{
            lineHeight: rem(32),
            color:'#8890A2',
            
        }
    },
    desc:{},


};
export const useTitleStyles = createUseStyles(classes);
