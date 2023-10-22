import {environment} from '../../../../configs/app.config';
import {useFooterStyles} from './footer.style';
import classNames from 'classnames';
import useLocalization from '../../../../../assets/lang';

const FooterComponent = ( ) => {
    const classes = useFooterStyles();
    const projectName = environment.applicationName;
    const date = new Date().getFullYear();
    const translate = useLocalization();

    const footerClasses = classNames({
        [classes.footer]: true,
    });

    return (
        <div className={footerClasses}>
            <div className='row m-0'>
                <div className='col-lg-12'>
                    © {date} All Rights Reserved by Madina.
                </div>
                 
            </div>
        </div>
    );
};

export default FooterComponent;
