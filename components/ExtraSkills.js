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
      <View style={{ width: 300, marginBottom: 30 }}>
        <Text style={{ fontSize: 17, marginBottom: 20, color: 'white' }}>
          Extra Skills
        </Text>
        <View style={styles.skills}>
          <FontAwesome name="lemon-o" style={styles.skillsIcons} />
          <Text style={{ color: 'white' }}>Sass</Text>
        </View>
        <View style={styles.skills}>
          <FontAwesome name="lemon-o" style={styles.skillsIcons} />
          <Text style={{ color: 'white' }}>Gulp, Webpack</Text>
        </View>
        <View style={styles.skills}>
          <FontAwesome name="lemon-o" style={styles.skillsIcons} />
          <Text style={{ color: 'white' }}>Git</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  skills: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 7,
    alignItems: 'center',
    color: 'white',
  },
  skillsIcons: {
    marginRight: 5,
    color: '#ffa500',
  },
});
