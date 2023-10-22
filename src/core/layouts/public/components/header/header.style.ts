import {createUseStyles} from 'react-jss';

const styles = {
  header: {
    // position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 100,
    left: 0,
    '@media (max-width: 991px)': {
      backgroundColor: '#F3F6F6',
  }
  },
  header_custom_col:{
    zIndex:'999999'
  }
};

export const useHeaderStyles = createUseStyles(styles);
