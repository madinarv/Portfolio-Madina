import fonts from '../abstracts/fonts';
import colors from '../abstracts/color';
import sizes from '../abstracts/sizes';
import bg from 'assets/images/statics/bg.jpg';

const commonStyles = {
    
    '@global': {
        html: {
            fontSize: sizes.base,
        },
        body: {
            width:'100%',
            height:'100%',
            backgroundAttachment: 'fixed',
            // fontFamily: fonts.fontMain,
            margin: 0,
            // backgroundImage: `url(${bg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        },
        a: {textDecoration: 'none',},
        img: {maxWidth: '100%',},
        ul: {listStyleType: 'none', padding: 0, margin: 0,},
        '::-webkit-scrollbar': {width: 7, height: 7,},
        '::-webkit-scrollbar-track': {boxShadow: `inset 0 0 2px ${colors.main}`,},
        '::-webkit-scrollbar-thumb': {background: colors.main,},
    },
};

export default commonStyles;
