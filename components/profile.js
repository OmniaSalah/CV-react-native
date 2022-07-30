import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  ListView,
  Button,
} from 'react-native';
import Constants from 'expo-constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-paper';

export default function Profile() {
  return (
    <View style={styles.view}>
      <Image
        source={{
          uri: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png',
        }}
        style={styles.img}
      />
      <Text style={{ fontSize: 18, marginTop: 20, color: 'white' }}>
        Omnia Fisal
      </Text>
      <Text style={{ fontSize: 15, color: 'white' }}>Front-end Developer</Text>
      <View style={styles.icons}>
        <View style={styles.icon}>
          <FontAwesome name="facebook" />
        </View>

        <View style={styles.icon}>
          <FontAwesome name="twitter" />
        </View>

        <View style={styles.icon}>
          <FontAwesome name="pinterest" />
        </View>

        <View style={styles.icon}>
          <FontAwesome name="linkedin" />
        </View>

        <View style={styles.icon}>
          <FontAwesome name="github" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 120,
    height: 120,
    borderRadius: 50,
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  icon: {
    backgroundColor: '#ffa500',
    borderRadius: 50,
    padding: 5,
    margin: 3,
    width: 20,
    height: 20,
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },  
});
