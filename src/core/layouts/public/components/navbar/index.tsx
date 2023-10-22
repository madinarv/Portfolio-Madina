import {BsClipboard2Data, BsPersonWorkspace} from 'react-icons/bs';
import {BiSolidContact} from 'react-icons/bi';
import {AiOutlineHome} from 'react-icons/ai';

 
export const navmenu = [
    {
        id:1,
        name:'Home',
        url:'/',
        icon:<AiOutlineHome/>
    },
    {
        id:2,
        name:'Resume',
        url:'/resume',
        icon:<BsClipboard2Data/>

    },
    {
        id:3,
        name:'Works',
        url:'/works',
        icon:<BsPersonWorkspace/>
    },
    {
        id:4,
        name:'Contact',
        url:'/contact',
        icon:<BiSolidContact/>
    }, 
  
];