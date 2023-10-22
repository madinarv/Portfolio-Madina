import colors from "assets/styles/abstracts/color";
import { rem } from "assets/styles/abstracts/functions";
import { transition } from "assets/styles/abstracts/mixins";
import { createUseStyles } from "react-jss";


const style = {
    card:{
        marginTop: rem(50),
    },
    cardCaption:{
        '& h2':{
            fontSize: rem(30),
            letterSpacing: rem(1)
        },
    },
    cardWrapper:{
        padding:'20px',
        margin:'30px 0px',
        borderRadius: rem(8)
    },
    cardsbox:{
        display:'flex',
        // '& span':{
        //     color:'black',
        //     marginBottom:'5px',
        // },
        // '& p':{
        //     color:'black',
        // },
    },
    cardsicon:{
       marginRight:'15px',
    },
    cardtext:{
        display:'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    cardstitle:{
        '& h3':{
            fontSize: rem(20)
        },

    },
    cardssubtitle:{
        marginTop:'5px',
        marginBottom:'5px',
        '& p':{
            lineHeight: rem(32),
            color:'#8890A2',
            
        }

    },
    title:{},
    year:{
        fontSize:(15),
        color:'#8890A2',

    },
    work:{
        '& span':{ 
        color:'black', 
        } 
    },
    place:{
        marginBottom:'15px',
        '& span':{ 
            color:'black', 
            marginBottom:'5px',

            }
    },
    
};
export const useCardStyles = createUseStyles(style);