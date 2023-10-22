import React, { useEffect } from 'react';
import { useTitleStyles } from './title.style';
import { ITitleProps } from './title';
import { useSelector } from 'react-redux';

const TitleComponent = ({  title, desc }: ITitleProps) => {

    const styles = useTitleStyles();
    const mode = useSelector((state: any) => state.mode);
    // console.log(mode);
    useEffect(() => {
      localStorage.setItem('mode', mode.toString());
    }, [mode]);
  
    return (
        <div className='col-lg-12'>
            <div className={styles.aboutmeHeading}>
                <div className={styles.aboutmeTitle} >
                    <h1 style={{ color : `${ mode ? 'white' : 'black' }`}}>{title}</h1>
                </div>
                <div className={styles.horizontal}>
                    <hr className={styles.hrCustom} />
                </div>
            </div>
            <div className={styles.aboutmeDesc}>
            {desc && <p className={styles.desc}>{desc}</p>}
            </div>
        </div>
    );
};

export default TitleComponent;