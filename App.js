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
import Profile from './components/profile';
import PersonalInfo from './components/personalInfo';
import Lang from './components/Lang';
import Skills from './components/Skills';
import ExtraSkills from './components/ExtraSkills';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
      <View style={styles.view}>
        <Profile/>
        
        <View style={styles.hr}></View>
        
        <PersonalInfo/>
        // lang
        <Lang/>
        
        <View style={styles.hr}></View>
        
        // skills
        <Skills/>
        
        <View style={styles.hr}></View>
        // extra skills
        <ExtraSkills/>
        
        <Button title="Download CV" color="#ffa500" style={{ marginTop: 50 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,

    // color: "white",
    // backgroundColor:"black",
  }, 
  hr: {
    width: 250,
    padding: 0.1,
    backgroundColor: 'white',
    marginTop: 30,
    marginBottom: 30,
  },
});
