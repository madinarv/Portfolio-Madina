import React, { useEffect } from 'react';
import { useTalentStyles } from './talent.style';
import SkillsComponent from 'core/shared/skills/skills.components';
import KnowladgesComponent from 'core/shared/knowladge/knowladges.component';
import { useSelector } from 'react-redux';

const TalentComponent = () => {
    const style = useTalentStyles();

    const talentMenu = [
        {
          id: 1,
          name:'HTML5',
        },
        {
          id: 2,
          name:'CSS 3',    
        },
        {
          id: 3,
          name:'BOOTSTRAP',
        },
        {
          id: 4,
          name:'JAVASCRIPT'
        },
        {
          id: 5,
          name:'REACT JS'
        },
        {
          id: 6,
          name:'REDUX'
        },    
        {
          id: 7,
          name:'TYPESCRIPT'
        },   
        {
          id: 9,
          name:'React Query'
        }
      ];

      const mode = useSelector((state: any) => state.mode);
      // console.log(mode);
      useEffect(() => {
        localStorage.setItem('mode', mode.toString());
      }, [mode]);
    

    return (
        <div className={style.talent} style={{ backgroundColor : `${ mode ? 'transparent' : '' }`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="content">
                            <SkillsComponent />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="content">
                            <KnowladgesComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TalentComponent;