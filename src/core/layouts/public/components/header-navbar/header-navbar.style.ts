import colors from '../../../../../assets/styles/abstracts/color';
import {rem} from '../../../../../assets/styles/abstracts/functions';
import {createUseStyles} from 'react-jss';

const styles = {
    navbar: {
        zIndex:'999',
    },
    navContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    left: {
        display: 'flex',
        alignItems: 'center',
        '& img': {
            display: 'block',
            width: rem(170),
            height:rem(70),
            objectFit: 'contain',
        }
    },
};

export const useHeaderNavbarStyles = createUseStyles(styles);
