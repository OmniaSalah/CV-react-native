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

export default function Lang() {
  return (
    <View style={styles.view}>
      <View style={{ width: 300 }}>
        <Text style={{ fontSize: 17, color: 'white' }}>Languages</Text>

        <View style={styles.langDivBig}>
          <View style={styles.langDiv}>
            <Text style={{ color: 'white' }}>Arabic</Text>
            <Text style={{ color: 'white' }}>100%</Text>
          </View>

          <View style={styles.viewBorder}>
            <View
              style={{
                width: 292,
                backgroundColor: '#ffa500',
                padding: 5,
                borderRadius: 20,
              }}></View>
          </View>

          <View style={styles.langDiv}>
            <Text style={{ color: 'white' }}>English</Text>
            <Text style={{ color: 'white' }}>70%</Text>
          </View>
          <View style={styles.viewBorder}>
            <View
              style={{
                width: 200,
                backgroundColor: '#ffa500',
                padding: 5,
                borderRadius: 20,
              }}></View>
          </View>
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
  langDivBig: {
    width: 300,
    // backgroundColor:"red"
  },
  langDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  viewBorder: {
    padding: 2,
    backgroundColor: 'transparent',
    border: '2px solid #ffa500',
    borderRadius: 20,
  },
});
