import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {StatusBar, View, Text, Dimensions} from 'react-native';
import styles from './src/styles/index.style';
import Carousel from 'react-native-snap-carousel';
import {ENTRIES2} from './src/static/entries';
import SliderEntry from './src/components/SliderEntry';
import {sliderWidth, itemWidth} from './src/styles/SliderEntry.style';

const {width} = Dimensions.get('screen');

const App = () => {
  const _renderItem = ({item, index}) => {
    return <SliderEntry data={item} even={true} />;
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <MapView
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 33.5668863,
          longitude: -7.6254267,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 70,
          width,
        }}>
        <Carousel
          data={ENTRIES2}
          renderItem={_renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          inactiveSlideScale={0.95}
          inactiveSlideOpacity={1}
          enableMomentum={true}
          activeSlideAlignment={'start'}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          activeAnimationType={'spring'}
          activeAnimationOptions={{
            friction: 4,
            tension: 40,
          }}
        />
      </View>
    </>
  );
};

export default App;
