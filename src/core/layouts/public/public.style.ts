import {createUseStyles} from 'react-jss';
import {rem} from '../../../assets/styles/abstracts/functions';
import {transition} from '../../../assets/styles/abstracts/mixins';
import sizes from '../../../assets/styles/abstracts/sizes';
import fonts from 'assets/styles/abstracts/fonts';
import bg from 'assets/images/statics/bg.jpg'; 

const styles = {
    public: {
        position:'relative',
        paddingBottom:'200px',
        width:'100%',
        height:'100%',
        backgroundAttachment: 'fixed',
        fontFamily: fonts.fontMain,
        margin: 0,
        // backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: transition(),
    },
    content: {
        // top:0,
        // marginLeft: rem(sizes.leftMenu),
        // minHeight: '100vh !important',
        transition: transition(),
        // backgroundColor:'red'
    },
    active: {marginLeft: 0,},
    rightContent:{
        backgroundColor: 'white',
        marginTop: '50px',
        // padding: '50px',
        borderRadius: '15px',
    }
};


export const usePublicLayoutStyles = createUseStyles(styles);
