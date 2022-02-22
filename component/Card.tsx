import { StyleSheet, TouchableOpacity, Text, View, ImageBackground, Image } from 'react-native';

interface IItem {
  title: string;
  description: string;
  coverPhoto: string;
}

const Card = ({ title, description, coverPhoto }: IItem): JSX.Element => (
  <View style={styles.container}>
    <ImageBackground
      source={coverPhoto as any}
      resizeMode="cover"
      style={styles.coverPhoto}
    />
    <Text style={styles.title}>
      {title}
    </Text>

    <Text style={styles.description}>
      {description}
    </Text>
  </View>
);

export default Card;
const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 240,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#F1F1F5',
    shadowColor: '#171725',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.1,
    shadowRadius: 1
  },
  coverPhoto: {
    maxWidth: 199,
    maxHeight: 98,
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
    marginVertical: 12,
    marginHorizontal: 16,
    color: '#0062FF'
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.5,
    color: '#92929D',
    marginBottom: 20,
    marginHorizontal: 16,
  }
})