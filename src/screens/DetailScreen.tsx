import React from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

interface Props {
  route: any;
}

const DetailScreen: React.FC<Props> = ({route}) => {
  const {placeId} = route.params;
  const place = useSelector((state: RootState) =>
    state.places.places.find(p => p.id === placeId),
  );

  if (!place) {
    return <Text>Place not found</Text>;
  }

  return (
    <View>
      <Image
        source={{uri: place.imageUrl}}
        style={{width: '100%', height: 200, marginBottom: 10}}
      />
      <View style={{marginHorizontal: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 17, marginBottom: 10}}>
          {place.name}
        </Text>
        <Text>{place.description}</Text>
      </View>
    </View>
  );
};

export default DetailScreen;
