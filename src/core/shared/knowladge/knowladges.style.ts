import { createUseStyles } from "react-jss";


const style = {
  knowledge:{
    marginLeft: '30px',
    '& h4':{
      fontSize: '27px',
    marginBottom: '30px',

    }
  },
  knowledgeName:{
    display: 'inline-block',
    // justifyContent:'center',
    '& p':{
      color:'#5F6E81',
      backgroundColor:'#EDF2F2',
      borderRadius: '5px',
      padding: '10px',
      margin: '3px',
    }
  },
  knowledgeBar:{},
  knowledgePer:{},

  
};
export const useKnowledgeStyles = createUseStyles(style);