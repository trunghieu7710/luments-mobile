import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const FirstSection = (): JSX.Element => (
    <View style={styles.container}>
      <TouchableOpacity style={{marginBottom: 8}}>
        <AntDesign name="leftcircle" size={40} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>Silver Tier</Text>
      <Text style={styles.content}>In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.</Text>
    </View>
  );

export default FirstSection;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 428,
    paddingHorizontal: 24,
    paddingTop: 60,
    backgroundColor: '#171725'
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: '#fff',
    lineHeight: 40,
    marginVertical: 12
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#B5B5BE',
    letterSpacing: -0.5
  }
})