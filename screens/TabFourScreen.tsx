import { StyleSheet } from 'react-native';

import { Text, View } from '../component/Themed';

export default function TabFourScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Four Screen</Text>
      <Text>Nothing!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
