import {HiLocationMarker, HiOutlineMailOpen} from 'react-icons/hi';
import {GiSmartphone} from 'react-icons/gi';
import {MdDateRange} from 'react-icons/md';
import { useProfileStyle } from './profile.style';

export const contact = [
    {
        id:1,
        name:'Phone',
        desc:'(+994)554685562',
        icon:<GiSmartphone />
    },
    {
        id:2,
        name:'Location',
        desc:'Baku,Azerbaijan',
        icon:<HiLocationMarker/>

    },
    {
        id:3,
        name:'Email',
        desc:'madinaavaliyeva@gmail.com',
        icon:<HiOutlineMailOpen/>

    },
    {
        id:4,
        name:'Birthday',
        desc:'May 29, 2002',
        icon:<MdDateRange/>

    }, 
  
];