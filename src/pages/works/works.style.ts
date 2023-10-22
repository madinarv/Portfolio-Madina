import { transition } from "assets/styles/abstracts/mixins";
import { createUseStyles } from "react-jss";

const styles = {
    work: {
        // marginTop: '50px',
        // backgroundColor: 'white',
        // borderRadius: '15px',
        padding: '50px',
    },
    menu: {
        display: 'flex',
        justifyContent: 'flex-end',


        '& li': {
            marginRight: '14px',
            color:'#44566C',
            
        cursor: 'pointer',
        }
    },
    isActive:{
        color:'white !important',
        backgroundImage: 'linear-gradient(to left, #DD2476, #FA5252EF)',
    },
    
    masonryGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
      },
      masonryGridColumn: {
      },
      portfolioItem: {
        background: 'rgb(255, 240, 240)',
        borderRadius: '8px',
        padding: '24px',
        marginBottom: '16px',
      },
      image: {
        overflow: 'hidden !important',
        borderRadius: '8px',
        cursor: 'pointer',
        transition:transition(),
        '& img':{
          width: '100%',
          height:'100%',
        },
        '&:hover': {
            transform: 'scale(1.1)',
            overflow: 'hidden',
          },
      },
      category: {
        fontSize: '14px',
        fontWeight: 'normal',
        color: 'gray',
        display: 'block',
       
      },
      title: {
        
 
        cursor: 'pointer',
        marginTop: '8px',
        transition: 'color 0.3s',
        '&:hover': {
          color: '#FA5252',
        },
 
      },
};
export const useWorkStyles = createUseStyles(styles);
