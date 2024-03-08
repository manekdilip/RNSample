import {FlatList, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from './getUsers';
import {CustomText, Loader, UserCard} from '../../components';
import styles from './styles';
import {routeNames} from '../../constants/screenNames';
import strings from '../../constants/strings';
import {onlyLettersAndSpaces} from '../../helpers/utils';
import colors from '../../themes/colors';

const Home = ({navigation}) => {
  // Local State for Screen
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState(undefined);
  const [error, setError] = useState(undefined);
  // Creating dispatcher for redux action
  const dispatch = useDispatch();
  // Redux state form store
  const getData = useSelector(state => state.getUsers);

  // Getting users by their frist or last name
  // It only allows latters and space between characters
  const userFilter = () => {
    if (searchText) {
      let checkSearchText = onlyLettersAndSpaces(searchText);
      // checking for the latters and spaces
      if (checkSearchText) {
        setError(undefined);
        // Filtering data for frist name and last name
        let filteredData = data.filter(item => {
          let firstName = item.firstName.toLowerCase();
          let lastName = item.lastName.toLowerCase();
          let fullName = `${firstName} ${lastName}`;
          let searchTextLowerCase = searchText.toLowerCase();
          return fullName?.includes(searchTextLowerCase);
        });
        setData(filteredData);
      } else {
        setError(strings.STRING_VALIDATION);
        setData(getData?.data?.users);
      }
    } else {
      setError(undefined);
      setData(getData?.data?.users);
    }
  };

  // useEffect Initial ations when screen is loaded
  useEffect(() => {
    // getting users API call
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    userFilter();
  }, [searchText]);

  // useEffect for every time getData changes
  useEffect(() => {
    // Checking if data is not null or undefined
    if (getData?.data) {
      // Setting data from store to local state
      setData(getData?.data?.users);
    }
  }, [getData]);

  // Render Items
  const renderItem = ({item}) => {
    return (
      <UserCard
        data={item}
        onPress={() =>
          navigation.navigate(routeNames.DETAILS, {userId: item.id})
        }
      />
    );
  };

  // Item seprator
  const ItemSperator = () => <View style={styles.itemSeprator} />;

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder={strings.SEARCH_PLACEHOLDER}
          onChangeText={setSearchText}
          style={styles.searchInput}
        />
        {error && <CustomText label={error} color={colors.red} />}
      </View>
      <ItemSperator />
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={<ItemSperator />}
      />
      {getData?.loading && <Loader />}
    </View>
  );
};

export default Home;
