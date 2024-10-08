import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPlaces, markAsVisited, unmarkAsVisited} from '../store/actions';
import {RootState} from '../store';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

interface Props {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const places = useSelector((state: RootState) => state.places.places);
  const dispatch = useDispatch();
  const [randomPlace, setRandomPlace] = useState<any>(null);

  useEffect(() => {
    dispatch(fetchPlaces());
  }, [dispatch]);

  const renderPlace = ({item}: any) => (
    <View style={styles.placeItem}>
      <Image source={{uri: item.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text>{item.description}</Text>
      <Button
        title={item.visited ? 'Unmark as Visited' : 'Mark as Visited'}
        onPress={() =>
          item.visited
            ? dispatch(unmarkAsVisited(item.id))
            : dispatch(markAsVisited(item.id))
        }
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail', {placeId: item.id})}>
        <Text style={{color: 'blue'}}>View Details</Text>
      </TouchableOpacity>
    </View>
  );

  // Function to pick a random place
  const suggestRandomPlace = () => {
    const randomIndex = Math.floor(Math.random() * places.length);
    setRandomPlace(places[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <Button title="Suggest a Random Place" onPress={suggestRandomPlace} />
      {randomPlace && (
        <View style={styles.suggestedPlaceContainer}>
          <Text style={styles.suggestedPlaceTitle}>
            Random Place Suggestion:
          </Text>
          <Image source={{uri: randomPlace.imageUrl}} style={styles.image} />
          <Text style={styles.name}>{randomPlace.name}</Text>
          <Text style={styles.description}>{randomPlace.description}</Text>
        </View>
      )}
      <Text style={[styles.suggestedPlaceTitle, {marginHorizontal: 20}]}>
        Places
      </Text>
      <FlatList
        data={places}
        renderItem={renderPlace}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  placeItem: {
    padding: 10,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    marginTop: 5,
    color: '#666',
  },
  visitButton: {
    marginTop: 10,
    fontSize: 16,
    color: '#0066cc',
  },
  suggestedPlaceContainer: {
    padding: 10,
    backgroundColor: '#eef',
    marginVertical: 10,
    borderRadius: 10,
    margin: 10,
  },
  suggestedPlaceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomeScreen;
