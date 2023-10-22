import React from 'react';
import { useKnowledgeStyles } from './knowladges.style';

const KnowledgesComponent = () => {
  const style = useKnowledgeStyles();

  const knowledgesMenu = [
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
  return (
    <div className={style.knowledge}>
      <div className="container">        
          <div className="knowledgeTitle">
            <h4>Knowledges</h4>
          </div>
         {
          knowledgesMenu.map((knowledge) =>{
            return  <div className={style.knowledgeName}>
            <p>{knowledge.name}</p>
          </div>;
          })
         }
          <div className={style.knowledgeBar}>
            <div className={style.knowledgePer}>

            </div>
          </div>
        </div>
      </div>
  


  );
};

export default KnowledgesComponent;