import { useSelector } from 'react-redux';
import { useCardStyles } from './card.style';
import { useEffect } from 'react';

const CardsComponent = ({ data, cardTitle }: any) => {
  const style = useCardStyles();
  const mode = useSelector((state: any) => state.mode);
  // console.log(mode);
  useEffect(() => {
    localStorage.setItem('mode', mode.toString());
  }, [mode]);

  return (
    <div className={style.card}>
      <div className='container'>
        <div className={style.cardCaption}>
          <h2 style={{ color : `${ mode ? 'white' : '#111111' }`}}>{cardTitle}</h2>
        </div>
        <div className='row'>
          {data.map((item: any, index: number) => {
            return (
              <div key={index} className='col-sm-12 col-lg-6'>
                <div
                  className={style.cardWrapper}
                  style={{
                    backgroundColor: `${mode ? 'transparent' : `${item.color}`}`,
                    border: `${mode ? '0.5px solid white' : 'none'}`,
                  }}
                >
                  <div className={style.cardsbox}>
                    <div className={style.cardsicon}>{item.icon}</div>
                    <div className={style.cardtext}>
                      <div className={style.cardstitle}>
                        <div>
                          {item.title ? (
                            <div className={style.title} style={{ color : `${ mode ? 'white' : '#111111' }`}}>
                              <h3 >{item.title}</h3>
                            </div>
                          ) : (
                            <div className={style.year}><h3>{item.year}</h3></div>
                          )}
                        </div>
                      </div>
                      <div className={style.cardssubtitle}>
                        <div>
                          {item.subTitle ? (
                            <div className={style.cardssubtitle}>
                             <p style={{ color : `${ mode ? 'white' : '#111111' }`}}>{item.subTitle}</p>
                            </div>
                          ) : (
                            <div className={style.place}>
                              <span style={{ color : `${ mode ? 'white' : '#111111' }`}}>{item.place}</span>
                            </div>
                          )}
                        </div>
                        <span style={{ color : `${ mode ? 'white' : '#111111' }`}}>{item.work}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardsComponent;
