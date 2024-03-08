import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import {moderateScale} from '../../helpers/responsive';

// Stylesheet for the screen
export default StyleSheet.create({
  container: {flex: 1},
  itemSeprator: {height: 2, width: '100%', backgroundColor: colors.grey},
  searchInput: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: moderateScale(5),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(7),
    color: colors.primary,
  },
  searchContainer: {
    marginVertical: moderateScale(15),
    marginHorizontal: moderateScale(20),
  },
});
