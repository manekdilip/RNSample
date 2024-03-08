import {StyleSheet} from 'react-native';
import {moderateScale} from '../../helpers/responsive';

// Stylesheet for the screen
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
    alignItems: 'center',
  },
  image: {
    height: moderateScale(150),
    width: moderateScale(150),
    resizeMode: 'contain',
  },
  name: {marginTop: moderateScale(10), marginBottom: moderateScale(10)},
  text: {marginTop: moderateScale(15)},
});
