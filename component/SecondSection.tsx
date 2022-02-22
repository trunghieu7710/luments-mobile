import { StyleSheet, TouchableOpacity, Text, View, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';

const { width: viewportWidth } = Dimensions.get('window');
const secondSectionWidth = viewportWidth - 32;

const SecondSection = (): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.subTitle}>
      Available Coin balance
    </Text>
    <Text style={styles.title}>
      340
    </Text>
    <ProgressBar progress={0.65} color='#0062FF' style={{ borderRadius: 2, height: 5, marginVertical: 24 }} />
    <Text style={styles.content}>
      You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.
    </Text>
    <TouchableOpacity onPress={() => console.log('link')}>
      <Text style={styles.link}>
        View tier benefits
        {' '}
        <AntDesign name="right" size={12} color="#0062FF" />
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Text
        style={styles.buttonText}
      >
        My Coupons
      </Text>
    </TouchableOpacity>
    <Text style={styles.subText}>
      Updated : 02/11/2021
    </Text>
  </View>
);
export default SecondSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: secondSectionWidth,
    height: 416,
    position: 'absolute',
    top: 252,
    left: 16,
    borderRadius: 8,
    padding: 24,
    shadowColor: '#171725',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    zIndex: 999,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 48,
    lineHeight: 56,
    color: '#171725'
  },
  subTitle: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 24,
    color: '#B5B5BE'
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.5,
    color: '#92929D',
    marginVertical: 12
  },
  link: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.5,
    color: '#0062FF',
    borderBottomColor: '#0062FF',
    borderBottomWidth: 2,
    marginVertical: 12
  },
  button: {
    width: 295,
    height: 60,
    backgroundColor: '#171725',
    borderRadius: 4,
    paddingVertical: 18,
    alignSelf: 'center',
    marginVertical: 12
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
  },
  subText: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.5,
    textAlign: 'center',
    color: '#B5B5BE',
    marginVertical: 8
  }
})