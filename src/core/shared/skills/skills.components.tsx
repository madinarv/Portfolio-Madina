import React from 'react';
import { useSkillsStyles } from './skills.style';

const SkillsComponent  = () => {
    const style = useSkillsStyles();
const skillMenu = [
    {
        id:1,
        name:'Html',
        color:'#FF6464',
        level:'50%',
    },
    {
        id: 2,
        name:'Css',  
        color:'#9272D4',
        level:'70%',

      },
      {
        id: 3,
        name:'Bootstrap',
        color:'#5185D4',
        level:'70%',

      },
      {
        id: 4,
        name:'Javascript',
        color:'#CA56F2',
        level:'60%',

      },
      // {
      //   id: 5,
      //   name:'REACT JS',
      //   color:''

      // },
      // {
      //   id: 6,
      //   name:'REDUX',
      //   color:''
      // },    
      // {
      //   id: 7,
      //   name:'TYPESCRIPT',
      //   color:''
      // },   
      // {
      //   id: 9,
      //   name:'React Query',
      //   color:''
      // }
];

  return (
    <div className={style.skill}>
        <div className="skillTitle">
            <h4>
            Working Skills
            </h4>
        </div>
        <div className={style.skillName}>
        {
          skillMenu.map((skill:any, index:number) =>{
            return  <><div key={index} className={style.skillMainName}>
              <p>{skill.name}</p>
              <p>{skill.level}</p>
            </div>
            <div className={style.skillBar}>
        <div className={style.skillLevel} 
        style={{ 
            width: skill.level,
            backgroundColor: skill.color
            }}></div>
      </div>
              </>
          ;})
         }
        </div>
          </div>
  );
};

export default SkillsComponent;