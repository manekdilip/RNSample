import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import colors from '../themes/colors';

// This is common loader to show activity progress
const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color={colors.secondary} />
    </View>
  );
};

export {Loader};

// Stylesheet for the component
const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.loaderBackground,
  },
});
