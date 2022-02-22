import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Card from './Card';

const { width: viewportWidth, height: viewPortHeight } = Dimensions.get('window');
const CarouselSection = ({ title = '', data = [] as any }): JSX.Element => {
  const renderCarouselItem = ({ item }: any): JSX.Element => (
    <Card {...item} />
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Carousel
        data={data}
        renderItem={renderCarouselItem}
        sliderWidth={viewportWidth}
        itemWidth={200}
        itemHeight={240}
        activeSlideAlignment={'start'}
      />

    </View>
  );
}
export default CarouselSection;

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    marginHorizontal: 16
  },
  title: {
    color: '#171725',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
    marginVertical: 12
  }
})