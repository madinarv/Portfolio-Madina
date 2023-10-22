import TitleComponent from 'core/shared/title/title.component';
import React, { useState, useEffect } from 'react';
import { useWorkStyles } from './works.style';
import { NavLink, useLocation } from 'react-router-dom';
import work1 from 'assets/images/statics/work1.jpg';
import { all, menu, video } from './index';

const WorksComponent = () => {
  const [data, setData] = useState<any>([]);
  const [select, setSelect] = useState<any>('all');
  const styles = useWorkStyles();
  const { pathname } = useLocation();

  useEffect(() => {
    switch (select) {
      case 'all':
        setData(all);
        break;
      case 'video':
        setData(video);
        break;
      default:
        setData(all);
    }
  }, [select]);


  return (
    <div>
      <div className={styles.work}>
        <div className="container">
          <div className="row">
            <TitleComponent
              title={'Portfolio'}

            />
          </div>
          <ul className={styles.menu}>
            {
              menu.map((item: any, index: number) => {
                return (
                  <li key={index} onClick={() => setSelect(item.title)}>
                    <p>{item.name}</p>
                  </li>
                );
              })
            }
          </ul>
          <div className='row mt-20'>
            {
              data?.map((item: any, index: number) => (
                <div key={index} className='col-lg-6'>
                  <div className={styles.masonryGrid}>
                    <div className={styles.masonryGridColumn}>
                      <div className={styles.portfolioItem}>
                        <div className={styles.image}>
                          <img alt='Image' src={item.img} />
                        </div>
                        <div>
                          <span className={styles.category} >{item.position}</span>
                          <h2 className={styles.title} >{item.title}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksComponent;