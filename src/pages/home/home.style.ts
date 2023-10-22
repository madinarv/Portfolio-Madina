import { rem } from 'assets/styles/abstracts/functions';
import {createUseStyles} from 'react-jss';

const styles = {
    home: {
        position:'relative',
        // marginTop:rem(120),
    },
  

};


export const usePublicLayoutStyles = createUseStyles(styles);
