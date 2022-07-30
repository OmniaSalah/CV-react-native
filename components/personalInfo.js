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

export default function PersonalInfo() {
  return (
    <View style={styles.view}>
      <View style={styles.viewWidth}>
        <View style={styles.viewFlex}>
          <View style={styles.viewBackGround}>
            <Text style={{ color: 'white' }}>Age</Text>
          </View>

          <Text style={{ color: 'white' }}>23</Text>
        </View>

        <View style={styles.viewFlex}>
          <View style={styles.viewBackGround}>
            <Text style={{ color: 'white' }}>Freelancer</Text>
          </View>

          <Text style={{ color: 'white' }}>Available</Text>
        </View>

        <View style={styles.viewFlex}>
          <View style={styles.viewBackGround}>
            <Text style={{ color: 'white' }}>Address</Text>
          </View>

          <Text style={{ color: 'white' }}>Egypt</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 50,

    // color: "white",
    // backgroundColor:"black",
  },
  viewFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    color: 'white',
    // backgroundColor: "red"
  },
  viewWidth: {
    width: 300,
    marginTop: 50,
    fontSize: 20,
  },
  viewBackGround: {
    backgroundColor: '#ffa500',
    padding: 10,
  },
});
