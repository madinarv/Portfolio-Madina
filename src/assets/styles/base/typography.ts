import nunitoBold from '../../fonts/Archivo/Archivo-Bold.ttf';
import nunitoLight from '../../fonts/Archivo/Archivo-Light.ttf';
import nunitoSemiBold from '../../fonts/Archivo/Archivo-SemiBold.ttf';
import nunitoRegular from '../../fonts/Archivo/Archivo-Regular.ttf';
import nunitoThin from '../../fonts/Archivo/Archivo-ExtraLight.ttf';
import nunitoXBlack from '../../fonts/Archivo/Archivo-ExtraBold.ttf';


const typography = {
  '@font-face': [
    {
      fontFamily: 'Nunito Bold',
      src: `url("${nunitoBold}")`,
    },
    {
      fontFamily: 'Nunito Light',
      src: `url("${nunitoLight}")`,
    },
    {
      fontFamily: 'Nunito Medium',
      src: `url("${nunitoSemiBold}")`,
    },
    {
      fontFamily: 'Nunito Regular',
      src: `url("${nunitoRegular}")`,
    },
    {
      fontFamily: 'Nunito Thin',
      src: `url("${nunitoThin}")`,
    },
    {
      fontFamily: 'Nunito XBlack',
      src: `url("${nunitoXBlack}")`,
    }
  ],
};

export default typography;
