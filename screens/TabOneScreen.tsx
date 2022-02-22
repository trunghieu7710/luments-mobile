import { StyleSheet, ScrollView } from 'react-native';

import Carousel from '../component/Carousel';
import { View } from '../component/Themed';
import { RootTabScreenProps } from '../types';
import FirstSection from '../component/FirstSection';
import SecondSection from '../component/SecondSection';
import { first_carousel, second_carousel, third_carousel } from '../assets/Data';
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <FirstSection />
        <SecondSection />
        <View style={{ height: 258 }} />

        <Carousel title="Petrol" data={first_carousel} />

        <Carousel title="Rental Rebate" data={second_carousel} />

        <Carousel title="Food and Beverage" data={third_carousel} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: '#fff',
    lineHeight: 40
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#B5B5BE',
    letterSpacing: -0.5
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  }
});
