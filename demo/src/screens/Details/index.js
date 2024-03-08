import {Image, ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserDetails} from './getUserDetails';
import {HeaderText, Loader, CustomText} from '../../components';
import strings from '../../constants/strings';
import styles from './styles';

// Details Screen
const Details = ({route}) => {
  // Params from previous screen
  const {params} = route;
  // Local State for Screen
  const [data, setData] = useState({});
  // Creating dispatcher for redux action
  const dispatch = useDispatch();
  // Redux state form store
  const getData = useSelector(state => state.getUserDetails);

  // useEffect Initial ations when screen is loaded
  useEffect(() => {
    if (params?.userId) {
      // getting user's details API call
      dispatch(getUserDetails(params?.userId));
    }
  }, []);

  // useEffect for every time getData changes
  useEffect(() => {
    // Checking if data is not null or undefined
    if (getData?.data) {
      // Setting data from store to local state
      setData(getData?.data);
    }
  }, [getData]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{uri: data?.image}} style={styles.image} />
        <HeaderText
          textStyles={styles.name}
          label={`${data?.firstName} ${data?.lastName}`}
        />
        <CustomText
          textStyles={styles.text}
          label={`${strings.EMAIL}: ${data?.email}`}
        />
        <CustomText
          textStyles={styles.text}
          label={`${strings.PHONE}: ${data?.phone}`}
        />
        <CustomText
          textStyles={styles.text}
          label={`${strings.DOB}: ${data?.birthDate}`}
        />
        <CustomText
          textStyles={styles.text}
          label={`${strings.AGE}: ${data?.age}`}
        />
        <CustomText
          textStyles={styles.text}
          label={`${strings.HEIGHT}: ${data?.age}`}
        />
        <CustomText
          textStyles={styles.text}
          label={`${strings.WEIGHT}: ${data?.age}`}
        />
      </View>
      {getData?.loading && <Loader />}
    </ScrollView>
  );
};

export default Details;
