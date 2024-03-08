import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {HeaderText} from './HeaderText';
import {CustomText} from './CustomText';
import {moderateScale} from '../helpers/responsive';

// This is User listing card component
// Used to display user's basic detail in row
const UserCard = ({data, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.photo} source={{uri: data?.image}} />
      <View>
        <HeaderText label={`${data?.firstName} ${data?.lastName}`} />
        <CustomText
          textStyles={styles.phone}
          size={'regular'}
          label={data?.phone}
        />
      </View>
    </TouchableOpacity>
  );
};

export {UserCard};

// Stylesheet for the component
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(15),
  },
  photo: {
    width: moderateScale(70),
    height: moderateScale(70),
    resizeMode: 'contain',
    marginRight: moderateScale(5),
  },
  phone: {marginTop: moderateScale(5)},
});
