import { createUseStyles } from 'react-jss';

const style = {
    skill:{
    marginLeft: '30px',
    width:'100%',
    maxWidth: '600px',
    padding:'0px 20px',
    '& h4':{
      fontSize: '27px',
      marginBottom: '30px', 
    }
  },
  skillName: {
    // flex: 1,
  },
  skillMainName:{
    display: 'flex',
    justifyContent: 'space-between',
    '& p':{
      color:'#44566C'
    }
  },
  skillBar: {
    // flex: 3,
    height: '3px',
    backgroundColor: '#D9D9D9',
    position: 'relative',
    borderRadius: '5px',
    marginBottom: '23px',
    marginTop: '6px',

  },
  skillLevel: {
    position: 'absolute',
    // top: 0,
    // left: 0,
    height: '100%',
    // width: '0', 
    borderRadius: '5px',

    transition: 'width 1s linear', 
  },

  skillPer:{}
};
export const useSkillsStyles = createUseStyles(style);